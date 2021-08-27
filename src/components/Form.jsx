import React from 'react'
import Icon from './Icon'
import formIcon from './../img/form.png'
import Button from './Button'
import illustrationForm from './../img/illustration-form.png'

function Form() {
    return (
        <div className="bg-white shadow-blueDefault" id="daftar">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between container mx-auto p-10">
                <div className="flex flex-col items-start md:w-5/12 mt-4">
                    <Icon icon={formIcon}/>
                    <h1 className="h1 mt-5 text-left">Daftar Vaksinasi</h1>
                    <p className=" text-grey mt-3 text-left">Kamu sudah yakin 100% dan berani untuk divaksin? Yuk daftarkan dirimu sekarang juga!</p>
                    <form className="text-left">
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Mendaftar Untuk</h3>
                            <div className="mt-4 flex flex-col sm:flex-row gap-3">
                                <div className="px-3 py-2 border-2 border-greyWhite rounded-lg mr-4">
                                    <input type="radio" name="orang" id="sendiri" className="mr-2" />
                                    <label htmlFor="orang">Diri Sendiri</label>
                                </div>
                                <div className="px-3 py-2 border-2 border-greyWhite rounded-lg mr-4">
                                    <input type="radio" name="orang" id="orangLain" className="mr-2" />
                                    <label htmlFor="orang">Orang Lain</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Nama Lengkap</h3>
                            <input type="text" placeholder="Nama Lengkap" name="nama-lengkap" className="mt-2 transition-all duration-300 rounded-lg focus:outline-green-normal border-greyWhite border-2 focus:shadow-none" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Nomor Induk Kependudukan (NIK)</h3>
                            <input type="number" placeholder="NIK" name="nik" className="mt-2 transition-all duration-300 rounded-lg focus:outline-green-normal border-greyWhite border-2 focus:shadow-none" />
                        </div>                        
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Nomor Telepon</h3>
                            <input type="tel" placeholder="Nomor Telepon (+62)" name="tel" className="mt-2 transition-all duration-300 rounded-lg focus:outline-green-normal border-greyWhite border-2 focus:shadow-none" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Tanggal Vaksinasi</h3>
                            <input type="date" name="tel" className="mt-2 transition-all duration-300 rounded-lg focus:outline-green-normal border-greyWhite border-2 focus:shadow-none" />
                        </div>                        
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Lokasi Vaksinasi</h3>
                            <select name="lokasi" className="mt-2 transition-all duration-300 rounded-lg focus:outline-green-normal border-greyWhite border-2">
                                <option value="Puskesmas Talaga">Puskesmas Talaga</option>
                                <option value="Puskesmas Talaga">Puskesmas Bantarujeg</option>
                            </select>
                            <p className=" text-grey mt-2 text-sm">Belum tahu lokasi vaksin terdekat? <a href="/" className="font-bold text-blue-normal">Lihat Di sini</a> </p>
                        </div>
                        <p className=" text-grey mt-4 mb-6">Setelah mendaftarkan diri disini, silahkan tunggu SMS untuk informasi lebih lanjut tentang pelaksanaan vaksinasi COVID-19.</p>
                        <Button type="submit">Daftar Vaksinasi</Button>
                    </form>
                </div>

                <div className="hidden md:block" >
                    <img src={illustrationForm} alt="Illustration-form" />
                </div>
            </div>
        </div>
    )
}

export default Form
