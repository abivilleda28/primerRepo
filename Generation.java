package com.generation;
import java.util.Scanner; // importar Scanner

public class Generation {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

Scanner s = new Scanner(System.in); // crear objeto Scanner con new
        
        System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
        String j1 = s.nextLine();
        
        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
        String j2 = s.nextLine();
        
        if (j1.equals(j2)) {
            System.out.println("Empate");
        } else {
            int g = 2; 
            switch (j1) {
                case "piedra":
                    if (j2==("tijeras")) {
                        g = 1;
                    }
                    break; // colocar los breaks
                case "papel":
                    if (j2==("piedra")) {
                        g = 1;
                    }
                    break;
                case "tijeras":
                    if (j2==("papel")) {
                        g = 1;
                    }
                    break;
                default:
                    System.out.println("Entrada inválida"); // se coloca el default
                    return; 
            }
            System.out.println("Gana el jugador " + g);
        }

        s.close(); 
		
		
	}

}
