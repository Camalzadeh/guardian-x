//
// Guardian‑X Detector (Parametric OpenSCAD)
// Author: ChatGPT for Farida Orucova
// Units: millimetres
//
// This model focuses on precision around the Raspberry Pi Zero 2 W, Camera Module 3 (Std/Wide),
// and a generic solar panel bracket. Key references (dimensions):
//  - Raspberry Pi Zero 2 W mechanical drawing: 65 x 30 board, 4x M2.5 holes with centres 3.5 mm from each edge.
//  - Hole drill size (Pi Zero family): 2.75 mm nominal (for M2.5 clearance).
//  - Camera Module 3 Std/Wide board: 25 x 24 x ~12 mm (front), with 2x mount holes ~ø2.2 mm.
//  - This model offers parameters for tight fits and tolerances (printer/material dependent).
//
// How to use:
//  1) Open in OpenSCAD (https://openscad.org).
//  2) Adjust the PARAMETERS section below to your exact components.
//  3) Render (F6) and Export as STL for 3D-printing, or as 3MF/AMF. For STEP, import STL into CAD.
//

// ===================== PARAMETERS =====================

// ----- Core tolerances -----
tol               = 0.20;       // General XY clearance for sliding fits
hole_xy_clearance = 0.10;       // Additional hole XY clearance
z_clearance       = 0.30;       // Height clearance for boards/components

// ----- Raspberry Pi Zero 2 W (official) -----
pi_len            = 65.0;       // Board length (X)
pi_wid            = 30.0;       // Board width  (Y)
pi_thk            = 5.0;        // Approx. total thickness (without headers)
pi_hole_from_edge = 3.5;        // Hole centre offset from both X and Y edges
pi_hole_d         = 2.75;       // Nominal hole drill (M2.5 clearance), we add tiny clearance below

// Derived: hole centres
pi_hx = [pi_hole_from_edge, pi_len - pi_hole_from_edge];
pi_hy = [pi_hole_from_edge, pi_wid - pi_hole_from_edge];

// ----- Standoffs for Pi mounting -----
standoff_od       = 5.2;        // Outer diameter of standoff boss
standoff_id       = 2.8 + hole_xy_clearance; // Through hole for M2.5
standoff_h        = 5.0;        // Height of standoff (match screw + board + spacer needs)

// ----- Camera Module 3 (Std/Wide) envelope -----
cam_len           = 25.0;       // X
cam_wid           = 24.0;       // Y
cam_thk_front     = 12.4;       // Z protrusion (varies by variant; set to 12.4 for Wide)
cam_mount_dx      = 21.6;       // distance between mount holes (centre-to-centre) in X (approx. from drawing)
cam_mount_dy      = 12.5;       // distance in Y (centre-to-centre) (approx. from drawing)
cam_mount_hole_d  = 2.4;        // clearance hole for M2 (or self-tapping)
lens_clear_d      = 15.0;       // generous circular opening to avoid vignetting
ffc_slot_w        = 8.0;        // ribbon width slot
ffc_slot_h        = 2.2;        // ribbon thickness slot height

// ----- Enclosure -----
wall_t            = 2.4;        // wall thickness
base_flange       = 4.0;        // perimeter flange for lid screws
encl_inner_x      = 110;        // internal X (fits Pi + cable space + battery space)
encl_inner_y      = 70;         // internal Y
encl_inner_z      = 45;         // internal Z (height)
lid_overlap       = 2.0;        // lid overlap depth into base
screw_post_od     = 7.0;        // corner screw post OD (for lid screws)
screw_post_id     = 3.0;        // screw pilot (e.g., self-tapping 2.9 mm)
corner_radius     = 6.0;        // outer corner radius for aesthetics/strength

// ----- Pole/U‑bolt mounting -----
ubolt_span        = 50;         // distance between U‑bolt legs
ubolt_leg_d       = 5.0;        // leg diameter
ubolt_slot_w      = ubolt_leg_d + 1.2;  // slot width (clearance)
ubolt_slot_h      = 14;         // slot height
ubolt_offset_z    = 18;         // vertical offset from enclosure mid‑plane

// ----- Solar Panel Bracket (generic) -----
panel_x           = 110;        // panel size X
panel_y           = 70;         // panel size Y
panel_t           = 3.0;        // panel thickness (frame underside)
tilt_min_deg      = 15;
tilt_max_deg      = 45;
hinge_pin_d       = 3.2;        // M3 pin
hinge_blk         = 10;         // hinge block size

// ----- Cable glands / pass-throughs -----
gland_d           = 12.0;       // opening diameter for cable gland
gland_count       = 2;
gland_edge_offset = 12.0;

// ===================== UTILITIES =====================

module rounded_box(size=[40,30,10], r=3, center=false){
    // Minkowski round; keep light-weight for preview
    translate(center ? [0,0,0] : [r, r, r])
    minkowski(){
        cube([size[0]-2*r, size[1]-2*r, size[2]-2*r], center=false);
        sphere(r=r, $fn=32);
    }
}

module screw_post(h=10, od=7, id=3){
    difference(){
        cylinder(h=h, d=od, $fn=48);
        translate([0,0,-0.1]) cylinder(h=h+0.2, d=id, $fn=48);
    }
}

module hole(d=3, h=50){
    translate([0,0,-0.1]) cylinder(h=h, d=d, $fn=48);
}

// ===================== PI MOUNT TRAY =====================

module pi_tray(){
    // Tray that carries the Raspberry Pi Zero 2 W with accurate hole positions.
    tray_x = pi_len + 2*base_flange;
    tray_y = pi_wid + 2*base_flange;
    tray_z = wall_t + 1.6;  // slight stiffener

    difference(){
        // base plate (with corner radius via rounded_box)
        rounded_box([tray_x, tray_y, tray_z], r=3, center=false);

        // thin relief under board to save plastic
        translate([base_flange, base_flange, 0.6])
            cube([pi_len, pi_wid, tray_z], center=false);
    }

    // Standoffs at exact Pi Zero 2 W hole centres
    for(xc = pi_hx)
    for(yc = pi_hy){
        translate([base_flange + xc, base_flange + yc, tray_z])
            screw_post(h=standoff_h, od=standoff_od, id=standoff_id);
    }
}

// ===================== CAMERA FACE PLATE =====================
module camera_faceplate(){
    plate_x = cam_len + 2*base_flange;
    plate_y = cam_wid + 2*base_flange;
    plate_z = wall_t + 1.0;

    difference(){
        rounded_box([plate_x, plate_y, plate_z], r=3);

        // Big lens window
        translate([plate_x/2, plate_y/2, -0.1]) cylinder(h=plate_z+0.4, d=lens_clear_d, $fn=64);

        // FFC slot on bottom edge
        translate([plate_x/2 - ffc_slot_w/2, 1.0, -0.1])
            cube([ffc_slot_w, ffc_slot_h, plate_z+0.4], center=false);

        // Mount holes for the camera board (approx centres)
        // centred about plate face
        translate([plate_x/2 - cam_mount_dx/2, plate_y/2 - cam_mount_dy/2, 0])
            hole(d=cam_mount_hole_d, h=20);
        translate([plate_x/2 + cam_mount_dx/2, plate_y/2 - cam_mount_dy/2, 0])
            hole(d=cam_mount_hole_d, h=20);
        translate([plate_x/2 - cam_mount_dx/2, plate_y/2 + cam_mount_dy/2, 0])
            hole(d=cam_mount_hole_d, h=20);
        translate([plate_x/2 + cam_mount_dx/2, plate_y/2 + cam_mount_dy/2, 0])
            hole(d=cam_mount_hole_d, h=20);
    }
}

// ===================== ENCLOSURE BASE =====================
module enclosure_base(){
    outer_x = encl_inner_x + 2*wall_t;
    outer_y = encl_inner_y + 2*wall_t;
    outer_z = encl_inner_z + wall_t;

    // Outer shell
    difference(){
        rounded_box([outer_x, outer_y, outer_z], r=corner_radius);
        // Hollow
        translate([wall_t, wall_t, wall_t])
            cube([encl_inner_x, encl_inner_y, encl_inner_z], center=false);

        // U‑bolt slots on the back face (Y‑ side)
        for(sign = [-1, 1]){
            translate([outer_x/2 + sign*ubolt_span/2, wall_t/2, outer_z/2 + ubolt_offset_z/2])
                rotate([90,0,0])
                    hull(){
                        translate([0, 0, -ubolt_slot_h/2]) cylinder(h=ubolt_slot_h, d=ubolt_slot_w, $fn=36);
                        translate([0, 0,  ubolt_slot_h/2]) cylinder(h=ubolt_slot_h, d=ubolt_slot_w, $fn=36);
                    }
        }

        // Cable gland openings on right side (X+)
        for(i=[0:gland_count-1]){
            zpos = wall_t + 15 + i*18;
            translate([outer_x - wall_t/2, outer_y/2, zpos])
                rotate([0,90,0]) hole(d=gland_d, h=10);
        }
    }

    // Lid screw posts (4 corners)
    post_h = wall_t + 8;
    translate([wall_t + base_flange, wall_t + base_flange, 0]) screw_post(h=post_h, od=screw_post_od, id=screw_post_id);
    translate([outer_x - wall_t - base_flange, wall_t + base_flange, 0]) screw_post(h=post_h, od=screw_post_od, id=screw_post_id);
    translate([wall_t + base_flange, outer_y - wall_t - base_flange, 0]) screw_post(h=post_h, od=screw_post_od, id=screw_post_id);
    translate([outer_x - wall_t - base_flange, outer_y - wall_t - base_flange, 0]) screw_post(h=post_h, od=screw_post_od, id=screw_post_id);

    // Mount tray for Pi inside base
    translate([wall_t + (encl_inner_x - (pi_len + 2*base_flange))/2,
               wall_t + (encl_inner_y - (pi_wid + 2*base_flange))/2,
               wall_t + 2])
        pi_tray();

    // Camera faceplate recess on front (Y+ face)
    face_x = cam_len + 2*base_flange + 2*wall_t;
    face_y = wall_t + 6;
    face_z = cam_wid + 2*base_flange + 2*wall_t;
    translate([ (outer_x - face_x)/2, outer_y - face_y, (outer_z - face_z)/2 ])
        difference(){
            cube([face_x, face_y, face_z], center=false);
            // recess for camera_faceplate to slide in
            translate([wall_t, 0, wall_t])
                cube([face_x - 2*wall_t, face_y, face_z - 2*wall_t], center=false);
        }
}

// ===================== LID =====================
module enclosure_lid(){
    outer_x = encl_inner_x + 2*wall_t;
    outer_y = encl_inner_y + 2*wall_t;
    outer_z = wall_t + 4;

    // Lid plate
    difference(){
        rounded_box([outer_x, outer_y, outer_z], r=corner_radius);
        // Underside relief / overlap
        translate([wall_t + 0.2, wall_t + 0.2, -0.1])
            cube([encl_inner_x - 0.4, encl_inner_y - 0.4, lid_overlap + 0.2], center=false);

        // Lid screw clearance
        translate([wall_t + base_flange, wall_t + base_flange, -0.1]) cylinder(h=outer_z+0.4, d=3.2, $fn=36);
        translate([outer_x - wall_t - base_flange, wall_t + base_flange, -0.1]) cylinder(h=outer_z+0.4, d=3.2, $fn=36);
        translate([wall_t + base_flange, outer_y - wall_t - base_flange, -0.1]) cylinder(h=outer_z+0.4, d=3.2, $fn=36);
        translate([outer_x - wall_t - base_flange, outer_y - wall_t - base_flange, -0.1]) cylinder(h=outer_z+0.4, d=3.2, $fn=36);
    }
}

// ===================== SOLAR BRACKET =====================
module solar_bracket(){
    // Simple two‑part hinge to support tilt. Panel mount is a frame.
    frame_t = 3;
    frame_x = panel_x + 2*frame_t;
    frame_y = panel_y + 2*frame_t;

    // Panel frame
    difference(){
        cube([frame_x, frame_y, frame_t], center=false);
        translate([frame_t, frame_t, -0.1]) cube([panel_x, panel_y, frame_t+0.2], center=false);
    }

    // Side brackets with hinge blocks
    for(side=[-1,1]){
        translate([ (frame_x/2) + side*(frame_x/2 + 6), frame_y/2, 0 ]){
            // Upright
            cube([4, 30, 30], center=true);
            // Hinge block
            translate([0, 10, 10]) rotate([0,90,0]) difference(){
                cylinder(h=hinge_blk, d=hinge_blk, $fn=48);
                translate([0,0,-0.1]) cylinder(h=hinge_blk+0.2, d=hinge_pin_d, $fn=48);
            }
        }
    }
}

// ===================== ASSEMBLY VIEW SWITCH =====================
// Set one of these to true to preview the part you need.
show_base        = true;
show_lid         = true;
show_cam_plate   = true;
show_solar_mount = true;

$fn=64;

if (show_base){
    translate([0,0,0]) enclosure_base();
}
if (show_lid){
    translate([encl_inner_x + 3*wall_t + 10, 0, 0]) enclosure_lid();
}
if (show_cam_plate){
    translate([0, encl_inner_y + 3*wall_t + 15, 0]) camera_faceplate();
}
if (show_solar_mount){
    translate([encl_inner_x + 3*wall_t + 10, encl_inner_y + 3*wall_t + 15, 0]) solar_bracket();
}
