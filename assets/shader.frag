#version 410


uniform vec2 area_w;
uniform vec2 area_h;
uniform uint max_iterations;

out vec4 pixel_color;

void main()
{
    vec3 color_map[17];
    color_map[0] = vec3(0.22, 0.11, 0.02);
    color_map[1] = vec3(0.34, 0.1, 0.35);
    color_map[2] = vec3(0.12,  0.31, 0.12);
    color_map[3] = vec3(0.41, 0.01,  0.28);
    color_map[4] = vec3(0.22, 0.20, 0.29);
    color_map[5] = vec3(0.01,  0.34, 0.2);
    color_map[6] = vec3(0.52, 0.71, 0.42);
    color_map[7] = vec3(0.91, 0.12, 0.09);
    color_map[8] = vec3(0.02, 0.19, 0.12);
    color_map[9] = vec3(0.22, 0.11, 0.02);
    color_map[10] = vec3(0.28, 0.92, 0.79);
    color_map[11] = vec3(0.49, 0.12, 0.52);
    color_map[12] = vec3(0.91, 0.09, 0.71);
    color_map[13] = vec3(1.00,  0.15, 0.24);
    color_map[14] = vec3(0.24,  0.12,  0.42);
    color_map[15] = vec3(0.69,  0.74, 0.12);
    color_map[16] = vec3(0.31, 0.2,  0.11);

    float rect_width = 900.0;
    float rect_height = 700.0;

   vec2 C = vec2(gl_FragCoord.x * (area_w.x - area_w.y) / rect_width  + area_w.y,
                        gl_FragCoord.y * (area_h.x - area_h.y) / rect_height + area_h.y);
    vec2 Z = vec2(0.0);
    uint iteration = 0u;

    while (iteration < max_iterations)
    {
        float x = Z.x * Z.x - Z.y * Z.y + C.x;
        float y = 2.0 * Z.x * Z.y       + C.y;

        if (x * x + y * y > 4.0)
            break;

        Z.x = x;
        Z.y = y;

        ++iteration;
    }

    uint row_index = (iteration * 100u / max_iterations % 17u);
    pixel_color = vec4((iteration == max_iterations ? vec3(0.0) : color_map[row_index]), 1.0);
}