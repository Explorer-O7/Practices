/* -- Rotate by 90 Degree --
Given a square matrix mat[][] of size n x n. The task is to rotate it by 90 degrees in an anti-clockwise direction without using any extra space.
  Input: mat[][] = [[1, 2, 3],
                    [4, 5, 6]
                    [7, 8, 9]]
  Output: Rotated Matrix:
                    [3, 6, 9]
                    [2, 5, 8]
                    [1, 4, 7]
  Input: mat[][] = [[1, 2],
                    [3, 4]]
  Output: Rotated Matrix:
                    [2, 4]
                    [1, 3] */

void rotateby90(vector<vector<int>>& mat) {
    int n = mat.size();
    for(int i=0; i<n; i++) {
        for(int j=i; j<n; j++) {
            int temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }
    for(int i=0; i<n/2; i++) {
        for(int j=0; j<n; j++) {
            int temp = mat[i][j];
            mat[i][j] = mat[n-i-1][j];
            mat[n-i-1][j] = temp;
        }
    }
}
