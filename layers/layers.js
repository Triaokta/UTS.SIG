var wms_layers = [];

var format_ADMINISTRASI_LN_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_0 = format_ADMINISTRASI_LN_25K_0.readFeatures(json_ADMINISTRASI_LN_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_0.addFeatures(features_ADMINISTRASI_LN_25K_0);
var lyr_ADMINISTRASI_LN_25K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASI_LN_25K_0, 
                style: style_ADMINISTRASI_LN_25K_0,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_0.png" /> ADMINISTRASI_LN_25K'
            });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> Anyar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> Bagendung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> Balekambang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> Banjarnegara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> Batukuda<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> Bendungan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> Bulakan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> Cibeber<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> Cikerai<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> Cikoneng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> Citangkil<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> Ciwaduk<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> Ciwedus<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> Dringo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> Gedongdalem<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> Gerem<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> Grogol<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> Gunungsugih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> Harjatani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> Jombang Wetan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> Kalitimbang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> Karangasem<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> Kebondalem<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> Kebonsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> Kedaleman<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> Kepuh<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> Kertasana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> Ketileng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> Kosambironyok<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> Kotabumi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> Kotasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> Labangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> Lebakdenok<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> Lebakgede<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> Masigit<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> Mekarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_36.png" /> Melati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_37.png" /> Pabean<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_38.png" /> Pakuncen<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_39.png" /> Panggungrawi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_40.png" /> Purwakarta<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_41.png" /> Ramanuju<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_42.png" /> Randakari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_43.png" /> Rawaarum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_44.png" /> Salira<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_45.png" /> Samangraya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_46.png" /> Sambilawang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_47.png" /> Sampir<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_48.png" /> Serdang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_49.png" /> Sigedong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_50.png" /> Sukmajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_51.png" /> Suralaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_52.png" /> Tamanbaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_53.png" /> Tamansari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_54.png" /> Tegalbunder<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_55.png" /> Tegalratu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_56.png" /> Terate<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_57.png" /> Wanakerta<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_58.png" /> Waringinkurung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_59.png" /> Warnasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_60.png" /> Winong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_61.png" /> <br />'
        });

lyr_ADMINISTRASI_LN_25K_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);
var layersList = [lyr_ADMINISTRASI_LN_25K_0,lyr_ADMINISTRASIDESA_AR_25K_1];
lyr_ADMINISTRASI_LN_25K_0.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_LN_25K_0.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASI_LN_25K_0.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'inline label', 'NAMOBJ': 'inline label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});