package org.codigo6;

public class codigo6 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int[] n = new int[20]; // colocar new

	    for (int i = 0; i < 20; i++) {
	      n[i] = (int)(Math.random() * 381) + 20;
	      System.out.println(n[i] + " ");
	    }
	    
	    System.out.println("\n¿Qué números quiere resaltar? "); // ln porque es string
	    System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");
	    int opcion = Integer.parseInt(System.console().readLine());

	    int multiplo = (opcion == 1) ? 5 : 7; // operador ternario

	    for (int e : n) { // es int porque son enteros
	      if (e % multiplo == 0) {
	        System.out.print("[" + e + "] ");
	      } else {
	        System.out.print(e + " ");
	        
	      }
	      	
	    }
	
	   }
	   }

