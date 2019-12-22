
public class BubbleSort {

	public static void main(String[] args) {
		
		int[] intarray = new int[]{5,3,1,6,7,2,4,8};
		
		sort_bubble(intarray);
		
		for (int y : intarray){
			System.out.println(y);
		}
		

	}
	
	public static int[] sort_bubble(int[] intarray){
			int swap = 0,i=1, j = intarray.length;
			while( j > 0){
				i = 1;
				while(i < j){
					if(intarray[i]	<	intarray[i-1]){
						swap 			= intarray[i-1];
						intarray[i-1] 	= intarray[i];
						intarray[i] 	= swap;
					}
					i++;
					
				}
				j--;
			}
		return intarray;
	}

}
