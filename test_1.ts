type Coordinate = {
  x: number;
  y: number;
};

/*
上記は2次元平面における座標を表現したモデルです。
与えられた座標をx軸方向に10平行移動させる関数を記載してください。
*/

const translateX10 = (coordinate: Coordinate): Coordinate => ({
  x: coordinate.x + 10,
  y: coordinate.y,
});