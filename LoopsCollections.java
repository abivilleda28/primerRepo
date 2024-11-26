package org.generation.loopsCollections;

import java.util.Scanner;



public class LoopsCollections {

	public static void main(String[] args) {
		// Loops: while, do while (se ejecutan al menos una vez aunque no se cumpla la condicion
		// TODO Auto-generated method stub
		int contador = 1;
				while (contador <= 5) { // integrar el contador manual
					System.out.println("Iteracion"+ contador);
					contador++;
					
					
		}
				System.out.println("-------------------");
				
				// doWhile
				int contadorDoWhile = 1;
				
				do {
				System.out.println("IteracionDoWhile"+ contador);
				contadorDoWhile++; // el incremento
				} while (contadorDoWhile <= 5);
				// estrategia más importante es igual <= o >= y hacer casos de prueba
			      //La logica salir de un ciclo ( En que casos el ciclo termina, el ciclo se rompeo o el ciclo se sale)
			
	
				/* For
				 * las consiciones de lso for se basan en 3 partes:
				 *1. Inicializacion -> se inisializa el contador
				 *2. Condicion -> se utiliza la comparacion de 2 variables el inicializador
				 *y la cantidad o la conidicion que delimiten n de interaciones de preferencia
				 *se iguala = 
				 *3. el incremento o actualizacion del contador*/
				
				System.out.println("-------------------");
			
	for( int i = 0; i<=5 ; i++) {
		System.out.println("Contador For " +i);
	
	
	
		}
	
	/*ForEach Java se utiliza la palabra for
	 * similar a como se usa un for puro en lugar de recibir condicional de 3 partes 
	 * (inicializador, condicion e incremento)
	 * va a utilizar una estructura de parametros:
	 * (TipodeElemento elemento(identificadorElemento): 
	 * colection(array,  Arraylist, set, map)*/
	
	String[] names = {"Xamitl ","Magally ","Alex"};
	String misCompaneros = "";
	for(String name : names) {
	misCompaneros += name;
	}
	System.out.println(misCompaneros);
	
		
/*.forEACH
Es un metodo nativo de un tipo de dato como los arrreglos que son objetos o similares a los objetos
function forEach (array) {}
array.ForEach
foreach es una function construida de la biblioteca de java
pero es una function pre construida*/

	
	
/*Ejercicio For: Part 3: For loops
Use the for loop to create a programm that ask the user to input a name and then prints each of the letters of the name
Hint You can use the following String functions:
lenght() -> returns the total number of characters of a given String
chartAt(i) -> returns the character at the given position(i) of a String*/
	
	
	Scanner scanner = new Scanner(System.in);
	System.out.print("Coloca tu nombre: ");
	String userName = scanner.nextLine();
	System.out.println("El numero de letras en tu nombre son: ");
	for(int i = 0; i < userName.length(); i++) {
	System.out.println(userName.charAt(i));
	
	}
	
	scanner.close();
	
	

	
	}
}