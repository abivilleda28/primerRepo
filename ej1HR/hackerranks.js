// Importar Scanner
import java.util.Scanner;

// Clase publica: es una clase que puede ser accedida desde cualquier parte del programa. 
// Es una de las formas de definir una clase en Java y la palabra clave public indica su nivel de accesibilidad.

public class Solution {


    private static final Scanner scanner = new Scanner(System.in);

        public static void main(String[] args) {
        int N = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");
        
        
    // Aqui empieza mi solucion 
       
      // Si es impar imprime Weird
      if (n % 2 != 0) {
        System.out.println("Weird");
    // Si es par y n >= 2 y n <= 5 imprime Not Weird
    }  else {
        if (n >= 2 && n <= 5) {
        System.out.println("Not Weird");
    // Si n esta entre un rango de 6-20 print Weird
    } else if (n >=6 && n <= 20) {
        System.out.println("Weird");
        // Si n es > 20 
    } else if (n > 20 ) {
       System.out.println("Not Weird");

    }

}
    

    

        scanner.close(); 
    }
}

console.log(Solution);
