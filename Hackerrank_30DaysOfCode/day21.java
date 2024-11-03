/* -- Generics --
Task: Write a single generic function named printArray; this function must take an array of generic elements as a parameter (the exception to this is C++, which takes a vector). You must use generics to complete the task and you don't write overloaded functions. */

import java.io.*;
import java.util.*;

class Printer<T> {
    public static <E> void printArray(E[] arr) {
        for(E ele : arr)
            System.out.println(ele);
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Integer[] intArray = new Integer[n];
        for(int i=0; i<n; i++) {
            intArray[i] = sc.nextInt();
        }
        n = sc.nextInt();
        String[] strArray = new String[n];
        for(int i=0; i<n; i++) {
            strArray[i] = sc.next();
        }
      
        Printer<Integer> intPrinter = new Printer<Integer>();
        Printer<String> strPrinter = new Printer<String>();
        intPrinter.printArray(intArray);
        strPrinter.printArray(strArray);
      
        if(Printer.class.getDeclaredMethods().length > 1)
            System.out.println("Your printer class should only have only method named printArray.");
    }
}
