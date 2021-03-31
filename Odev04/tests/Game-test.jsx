const React = require('react');
const {mount} = require('enzyme');
const {Game} = require('../src/Game');

test('kartTıklama',()=>{
    const driver = mount(<Game/>);

    let kart = driver.find('.kart').at(0);

    kart.simulate('click');
    kart.find("img").prop("src");

    kart = driver.find('.kart').at(1);
    kart.simulate('click');

    kart = driver.find('.kart').at(2);
    kart.simulate('click');

    kart = driver.find('.kart').at(0);
    let srcName = kart.find("img").prop("src")
    expect(srcName === 'img/Kedi.jpg' || srcName ==='img/Kopek.jpg').toBeTruthy();

} )

test('yeniOyun' ,() =>{
    const driver = mount(<Game/>);
    //Bütün Oyunlar Maksimum 2 Kart Seçince Bittiği için Herhangi 2 Kartın Seçilmesi Durumunda 'Yeniden Başlat' Seçeneği Aktif Oluyor
    let kart = driver.find('.kart').at(0);
    kart.simulate('click');
    kart = driver.find('.kart').at(1);
    kart.simulate('click');

    let yenidenBaslat = driver.find('.link');
    yenidenBaslat.simulate('click');


} )

test('kazanma',() =>{
    const driver = mount(<Game/>);

    let kart = driver.find('.kart').at(0);

    kart.simulate('click');
    kart.find("img").prop("src");

    kart = driver.find('.kart').at(0);
    let srcName = kart.find("img").prop("src")
    expect(srcName === 'img/Kedi.jpg');

} )

test('kaybetme',() =>{
    const driver = mount(<Game/>);

    let kart = driver.find('.kart').at(0);

    kart.simulate('click');
    kart.find("img").prop("src");

    kart = driver.find('.kart').at(0);
    let srcName = kart.find("img").prop("src")
    expect(srcName === 'img/Kopek.jpg');

} )