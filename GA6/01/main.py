import pygame
import os

def main():
    pygame.init()
    info = pygame.display.Info()
    # Create a window that fits the screen but leaves a safe margin for title/task bars
    w = min(1300, info.current_w - 50)
    h = min(850, info.current_h - 100)
    screen = pygame.display.set_mode((w, h), pygame.RESIZABLE)
    screen_width, screen_height = screen.get_size()
    pygame.display.set_caption("Jigsaw Puzzle")
    
    img = pygame.image.load("q-rotated-image-grid-forensics-server.bmp").convert()
    
    pieces = []
    # Create pieces and scatter them on the right side
    import random
    for y in range(6):
        for x in range(6):
            rect = pygame.Rect(x * 100, y * 100, 100, 100)
            sub = img.subsurface(rect).copy()
            # Ensure pieces spawn within the visible screen area (right of the 6x6 grid)
            spawn_x = random.randint(700, max(750, screen_width - 120))
            spawn_y = random.randint(50, max(100, screen_height - 120))
            pieces.append({
                "surf": sub,
                "rect": pygame.Rect(spawn_x, spawn_y, 100, 100),
                "is_flipped": False,
                "rotation": 0
            })
            
    running = True
    selected = None
    offset_x = 0
    offset_y = 0
    
    clock = pygame.time.Clock()
    last_click_time = 0
    
    while running:
        screen.fill((50, 50, 50))
        
        # Draw a 6x6 grid on the left
        for i in range(7):
            pygame.draw.line(screen, (100, 100, 100), (50, 50 + i * 100), (650, 50 + i * 100))
            pygame.draw.line(screen, (100, 100, 100), (50 + i * 100, 50), (50 + i * 100, 650))
            
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
                
            elif event.type == pygame.MOUSEBUTTONDOWN:
                if event.button == 1: # Left click
                    current_time = pygame.time.get_ticks()
                    is_double_click = (current_time - last_click_time < 300)
                    last_click_time = current_time
                    
                    clicked_piece = None
                    for p in reversed(pieces):
                        if p["rect"].collidepoint(event.pos):
                            clicked_piece = p
                            break
                            
                    if clicked_piece:
                        if is_double_click:
                            clicked_piece["is_flipped"] = not clicked_piece["is_flipped"]
                            clicked_piece["surf"] = pygame.transform.flip(clicked_piece["surf"], True, False)
                        else:
                            selected = clicked_piece
                            offset_x = clicked_piece["rect"].x - event.pos[0]
                            offset_y = clicked_piece["rect"].y - event.pos[1]
                            pieces.remove(clicked_piece)
                            pieces.append(clicked_piece)
                            
                elif event.button == 3: # Right click
                    for p in reversed(pieces):
                        if p["rect"].collidepoint(event.pos):
                            p["rotation"] = (p["rotation"] - 90) % 360
                            p["surf"] = pygame.transform.rotate(p["surf"], -90)
                            c = p["rect"].center
                            p["rect"] = p["surf"].get_rect(center=c)
                            break
                            
            elif event.type == pygame.MOUSEBUTTONUP:
                if event.button == 1:
                    if selected:
                        # Snap to grid
                        x, y = selected["rect"].topleft
                        grid_x = round((x - 50) / 100.0) * 100 + 50
                        grid_y = round((y - 50) / 100.0) * 100 + 50
                        if abs(x - grid_x) < 30 and abs(y - grid_y) < 30:
                            selected["rect"].topleft = (grid_x, grid_y)
                        selected = None
                        
            elif event.type == pygame.MOUSEMOTION:
                if selected:
                    selected["rect"].x = event.pos[0] + offset_x
                    selected["rect"].y = event.pos[1] + offset_y
                    
        for p in pieces:
            screen.blit(p["surf"], p["rect"].topleft)
            
        pygame.display.flip()
        clock.tick(60)

    pygame.quit()

if __name__ == "__main__":
    main()
