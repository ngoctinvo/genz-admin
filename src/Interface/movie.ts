interface Movie {
	maPhim: number;
	tenPhim: string;
	biDanh: string;
	trailer: string;
	hinhAnh: string;
	moTa: string;
	maNhom: string;
	ngayKhoiChieu: string;
	danhGia: number;
	hot: boolean;
	dangChieu: boolean;
	sapChieu: boolean;
}

export interface ShowTimes {
	heThongRapChieu: HeThongRapChieu[];
	maPhim: number;
	tenPhim: string;
	biDanh: string;
	trailer: string;
	hinhAnh: string;
	moTa: string;
	maNhom: string;
	ngayKhoiChieu: Date;
	danhGia: number;
}

export interface HeThongRapChieu {
	cumRapChieu: CumRapChieu[];
	maHeThongRap: string;
	tenHeThongRap: string;
	logo: string;
}

export interface CumRapChieu {
	lichChieuPhim: LichChieuPhim[];
	maCumRap: string;
	tenCumRap: string;
	hinhAnh: null;
}

export interface LichChieuPhim {
	maLichChieu: string;
	maRap: string;
	tenRap: string;
	ngayChieuGioChieu: Date;
	giaVe: number;
	thoiLuong: number;
}

export default Movie;
