// Same text as the obj files in this folder.
// A normal script so log_ride.html works when opened directly.
const MODEL_SRC = {
  cube: `# name cube
# The starting cube, centered at the origin. Edges for views 1 and 2, triangles for view 3.
v 1 1 1
v -1 1 1
v 1 -1 1
v -1 -1 1
v 1 1 -1
v -1 1 -1
v 1 -1 -1
v -1 -1 -1
# color #d5e6ef
l 1 2
l 2 4
l 4 3
l 3 1
l 5 6
l 6 8
l 8 7
l 7 5
l 1 5
l 2 6
l 3 7
l 4 8
# color #4F8FD9
f 1 2 4
f 1 4 3
# color #E15A4A
f 5 6 8
f 5 8 7
# color #F2D35E
f 1 3 7
f 1 7 5
# color #2E9B57
f 2 4 8
f 2 8 6
# color #D5E6EF
f 1 2 6
f 1 6 5
# color #8B5A2B
f 3 4 8
f 3 8 7`,
  log: `# name log
# A log lying along Z, centered at the origin. Ride it down the river.
# Octagonal prism with two end caps. Uniform scale is applied per instance.
# color #8B5A2B
v 0.4500 0.0000 -1.6000
v 0.3182 0.3182 -1.6000
v 0.0000 0.4500 -1.6000
v -0.3182 0.3182 -1.6000
v -0.4500 0.0000 -1.6000
v -0.3182 -0.3182 -1.6000
v -0.0000 -0.4500 -1.6000
v 0.3182 -0.3182 -1.6000
v 0.4500 0.0000 -0.5300
v 0.3182 0.3182 -0.5300
v 0.0000 0.4500 -0.5300
v -0.3182 0.3182 -0.5300
v -0.4500 0.0000 -0.5300
v -0.3182 -0.3182 -0.5300
v -0.0000 -0.4500 -0.5300
v 0.3182 -0.3182 -0.5300
v 0.4500 0.0000 0.5300
v 0.3182 0.3182 0.5300
v 0.0000 0.4500 0.5300
v -0.3182 0.3182 0.5300
v -0.4500 0.0000 0.5300
v -0.3182 -0.3182 0.5300
v -0.0000 -0.4500 0.5300
v 0.3182 -0.3182 0.5300
v 0.4500 0.0000 1.6000
v 0.3182 0.3182 1.6000
v 0.0000 0.4500 1.6000
v -0.3182 0.3182 1.6000
v -0.4500 0.0000 1.6000
v -0.3182 -0.3182 1.6000
v -0.0000 -0.4500 1.6000
v 0.3182 -0.3182 1.6000
v 0.0000 0.0000 -1.6000
v 0.0000 0.0000 1.6000
l 1 2
l 2 3
l 3 4
l 4 5
l 5 6
l 6 7
l 7 8
l 8 1
l 9 10
l 10 11
l 11 12
l 12 13
l 13 14
l 14 15
l 15 16
l 16 9
l 17 18
l 18 19
l 19 20
l 20 21
l 21 22
l 22 23
l 23 24
l 24 17
l 25 26
l 26 27
l 27 28
l 28 29
l 29 30
l 30 31
l 31 32
l 32 25
l 1 9
l 2 10
l 3 11
l 4 12
l 5 13
l 6 14
l 7 15
l 8 16
l 9 17
l 10 18
l 11 19
l 12 20
l 13 21
l 14 22
l 15 23
l 16 24
l 17 25
l 18 26
l 19 27
l 20 28
l 21 29
l 22 30
l 23 31
l 24 32
# color #E7C8A0
l 33 1
l 34 25
l 33 2
l 34 26
l 33 3
l 34 27
l 33 4
l 34 28
l 33 5
l 34 29
l 33 6
l 34 30
l 33 7
l 34 31
l 33 8
l 34 32
# Triangles for view 3. Each bark panel is two triangles.
# Panels alternate between two browns so the sides of the log show up.
# color #8B5A2B
f 1 2 10
f 1 10 9
f 3 4 12
f 3 12 11
f 5 6 14
f 5 14 13
f 7 8 16
f 7 16 15
f 9 10 18
f 9 18 17
f 11 12 20
f 11 20 19
f 13 14 22
f 13 22 21
f 15 16 24
f 15 24 23
f 17 18 26
f 17 26 25
f 19 20 28
f 19 28 27
f 21 22 30
f 21 30 29
f 23 24 32
f 23 32 31
# color #6B4220
f 2 3 11
f 2 11 10
f 4 5 13
f 4 13 12
f 6 7 15
f 6 15 14
f 8 1 9
f 8 9 16
f 10 11 19
f 10 19 18
f 12 13 21
f 12 21 20
f 14 15 23
f 14 23 22
f 16 9 17
f 16 17 24
f 18 19 27
f 18 27 26
f 20 21 29
f 20 29 28
f 22 23 31
f 22 31 30
f 24 17 25
f 24 25 32
# color #E7C8A0
f 33 1 2
f 33 2 3
f 33 3 4
f 33 4 5
f 33 5 6
f 33 6 7
f 33 7 8
f 33 8 1
f 34 25 26
f 34 26 27
f 34 27 28
f 34 28 29
f 34 29 30
f 34 30 31
f 34 31 32
f 34 32 25`,
  lilypad: `# name lilypad
# Flat on the XZ plane, centered at the origin. A notch breaks the rim.
# The flower sits above the pad. Instances are translated and scaled onto the river.
v 0.9063 0.0000 0.4226
v 0.3420 0.0000 0.9397
v -0.4226 0.0000 0.9063
v -0.9397 0.0000 0.3420
v -0.9063 0.0000 -0.4226
v -0.3420 0.0000 -0.9397
v 0.4226 0.0000 -0.9063
v 0.9397 0.0000 -0.3420
v 0.5619 0.0000 0.2620
v 0.2121 0.0000 0.5826
v -0.2620 0.0000 0.5619
v -0.5826 0.0000 0.2121
v -0.5619 0.0000 -0.2620
v -0.2121 0.0000 -0.5826
v 0.2620 0.0000 -0.5619
v 0.5826 0.0000 -0.2121
v 0.0000 0.0000 0.0000
v 0.3600 0.1600 0.0000
v 0.1800 0.1600 0.3118
v -0.1800 0.1600 0.3118
v -0.3600 0.1600 0.0000
v -0.1800 0.1600 -0.3118
v 0.1800 0.1600 -0.3118
v 0.0000 0.3400 0.0000
# color #2E9B57
l 1 2
l 2 3
l 3 4
l 4 5
l 5 6
l 6 7
l 7 8
l 9 10
l 10 11
l 11 12
l 12 13
l 13 14
l 14 15
l 15 16
l 16 9
l 9 1
l 10 2
l 11 3
l 12 4
l 13 5
l 14 6
l 15 7
l 16 8
l 17 9
l 17 10
l 17 11
l 17 12
l 17 13
l 17 14
l 17 15
l 17 16
l 17 1
l 17 8
# color #F2D35E
l 18 19
l 19 20
l 20 21
l 21 22
l 22 23
l 23 18
# color #E15A4A
l 24 18
l 24 19
l 24 20
l 24 21
l 24 22
l 24 23
l 17 24
# Triangles for view 3. The notch between vertices 8 and 1 stays open.
# color #2E9B57
f 17 9 10
f 17 10 11
f 17 11 12
f 17 12 13
f 17 13 14
f 17 14 15
f 17 15 16
# color #267F48
f 1 2 10
f 1 10 9
f 2 3 11
f 2 11 10
f 3 4 12
f 3 12 11
f 4 5 13
f 4 13 12
f 5 6 14
f 5 14 13
f 6 7 15
f 6 15 14
f 7 8 16
f 7 16 15
# color #F2D35E
f 18 19 20
f 18 20 21
f 18 21 22
f 18 22 23
f 24 19 20
f 24 21 22
f 24 23 18
# color #E15A4A
f 24 18 19
f 24 20 21
f 24 22 23`,
  wall: `# name wall
# A muddy riverbank segment centered at the origin, with a rock at the waterline and grass on top.
# Length runs along Z, height along Y, thickness along X.
# Tile these along both banks by translating in Z. No rotation, so rocks and grass sit on both sides.
# Mud bank
v -0.2200 -1.0000 -1.0000
v  0.2200 -1.0000 -1.0000
v  0.2200  0.6200 -1.0000
v -0.2200  0.6200 -1.0000
v -0.2200 -1.0000  1.0000
v  0.2200 -1.0000  1.0000
v  0.2200  0.6200  1.0000
v -0.2200  0.6200  1.0000
# Grass top, wider than the mud so it hangs out over the edge
v -0.7500  0.6200 -1.0000
v  0.7500  0.6200 -1.0000
v  0.7500  1.0000 -1.0000
v -0.7500  1.0000 -1.0000
v -0.7500  0.6200  1.0000
v  0.7500  0.6200  1.0000
v  0.7500  1.0000  1.0000
v -0.7500  1.0000  1.0000
# Rocks, each a square base on the water with a point on top
v  0.1400 -0.9500 -0.7000
v  0.5400 -0.9500 -0.7000
v  0.5400 -0.9500 -0.3000
v  0.1400 -0.9500 -0.3000
v  0.3400 -0.6500 -0.5000
v -0.5100 -0.9500  0.3200
v -0.1500 -0.9500  0.3200
v -0.1500 -0.9500  0.6800
v -0.5100 -0.9500  0.6800
v -0.3300 -0.6900  0.5000
# Where the wet mud ends
v -0.2200 -0.3000 -1.0000
v -0.2200 -0.3000  1.0000
v  0.2200 -0.3000 -1.0000
v  0.2200 -0.3000  1.0000
# color #9C7A50
l 1 2
l 2 3
l 3 4
l 4 1
l 5 6
l 6 7
l 7 8
l 8 5
l 1 5
l 2 6
l 3 7
l 4 8
l 27 28
l 29 30
# color #5FAF45
l 9 10
l 10 11
l 11 12
l 12 9
l 13 14
l 14 15
l 15 16
l 16 13
l 9 13
l 10 14
l 11 15
l 12 16
# color #A0A4A8
l 17 18
l 18 19
l 19 20
l 20 17
l 21 17
l 21 18
l 21 19
l 21 20
l 22 23
l 23 24
l 24 25
l 25 22
l 26 22
l 26 23
l 26 24
l 26 25
# Triangles for view 3.
# color #6B4A2E
f 27 28 8
f 27 8 4
f 29 30 7
f 29 7 3
f 1 2 3
f 1 3 4
f 5 6 7
f 5 7 8
# color #4A3322
f 1 5 28
f 1 28 27
f 2 6 30
f 2 30 29
# color #4C8A3A
f 9 10 11
f 9 11 12
f 13 14 15
f 13 15 16
f 9 13 16
f 9 16 12
f 10 14 15
f 10 15 11
f 12 11 15
f 12 15 16
f 9 10 14
f 9 14 13
# color #8A8D91
f 21 17 18
f 21 19 20
f 26 22 23
f 26 24 25
# color #6F7377
f 21 18 19
f 21 20 17
f 26 23 24
f 26 25 22`,
  water: `# name water
# A strip of river surface centered at the origin, lying flat on the XZ plane.
# Tile these down the river by translating in Z. No rotation.
v -6.9 0 -1
v 6.9 0 -1
v 6.9 0 0
v -6.9 0 0
v 6.9 0 1
v -6.9 0 1
v -6.88 0 0.12
v -5 0 -0.12
v -4 0 0.12
v -3 0 -0.12
v -2 0 0.12
v -1 0 -0.12
v 0 0 0.12
v 1 0 -0.12
v 2 0 0.12
v 3 0 -0.12
v 4 0 0.12
v 5 0 -0.12
v 6.88 0 0.12
# color #3A6EA5
l 7 8
l 8 9
l 9 10
l 10 11
l 11 12
l 12 13
l 13 14
l 14 15
l 15 16
l 16 17
l 17 18
l 18 19
# Triangles for view 3. Two shades make stripes across the river.
# color #16406B
f 1 2 3
f 1 3 4
# color #1C4F82
f 4 3 5
f 4 5 6`,
};
