
public class PancakeSort {
	public static void flip(int[] arr, int index) {
		int flip_tmp = 0, i = 0;
		while( i<index) {
			flip_tmp = arr[i];
			arr[i] = arr[index];
			arr[index] = flip_tmp;
			i++;
			index--;
		}
	}

	public static int rechercher_max(int[] arr, int jusqua_index) {

		int max = arr[0],index_max=0,i=0;
		while( i < jusqua_index) {
			if(arr[i] < arr[i+1]) {
				max = arr[i+1];
				index_max= i+1;
			}
			i++;
		}
		return index_max;
	}

	public static void main(String[] args) {
		int[] arr = new int[] {5,4,3,2,1};
		int index = arr.length-1,max = 0;
		while(index>=0) {
			max = rechercher_max(arr, index);
			flip(arr,max);
			flip(arr,index);
			index--;
		}

		for(int i : arr) {
			System.out.print(i);
		}

	}
}
