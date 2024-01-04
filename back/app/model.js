// Importing mongoose
const mongoose = require('mongoose');

// Calling mongoose schema
const Schema = mongoose.Schema;

// Creating data schema
const formDataSchema = new Schema({
	"rasmiy_nomi": {
		type: String,
		required: true
	},
	"tashkil_yili": {
		type: String,
		required: true
	},
	"qaror": {
		type: String,
		required: true
	},
	"faoliyat_turi": {
		type: String,
		required: true
	},
	"boshqaruv_shakli": {
		type: String,
		required: true
	},
	"ustav": {
		type: String,
		required: true
	},
	"tasischi": {
		type: String,
		required: true
	},
	"tashkilot_soni": {
		type: String,
		required: true
	},
	"tashkilot_raxbari_ismi": {
		type: String,
		required: true
	},
	"tashkilot_raxbari_nomeri": {
		type: String,
		required: true
	},
	"tashkilot_bosh_xisobchisi": {
		type: String,
		required: true
	},
	"tashkilot_xisobchi_nomeri": {
		type: String,
		required: true
	},
	"yuridik_manzili": {
		type: String,
		required: true
	},
	"joylashgan_manzili": {
		type: String,
		required: true
	},
	"vebsayt_nomi": {
		type: String,
		required: true
	},
	"asosiy_raqam": {
		type: String,
		required: true
	},
	"stir": {
		type: String,
		required: true
	},
	"bank_nomi": {
		type: String,
		required: true
	},
	"xisob_raqam": {
		type: String,
		required: true
	},
	"tashqari_xisob_raqam": {
		type: String,
		required: true
	},
	"tijorat_xisob_raqam": {
		type: String,
		required: true
	},
	"umumiy_yer": {
		type: String,
		required: true
	},
	"paxta": {
		type: String,
		required: true
	},
	"galla": {
		type: String,
		required: true
	},
	"issiqxona": {
		type: String,
		required: true
	},
	"bog_maydoni": {
		type: String,
		required: true
	},
	"tokzor": {
		type: String,
		required: true
	},
	"poliz": {
		type: String,
		required: true
	},
	"sinov_maydoni": {
		type: String,
		required: true
	},
	"pudrat": {
		type: String,
		required: true
	},
	"xamkorlik_shartnomasi": {
		type: String,
		required: true
	},
	"asosiy_vosita": {
		type: String,
		required: true
	},
	"foydalanil_bino": {
		type: String,
		required: true
	},
	"foydalanilma_bino": {
		type: String,
		required: true
	},
	"yengil_avto": {
		type: String,
		required: true
	},
	"yuk_avto": {
		type: String,
		required: true
	},
	"boshqa_avto": {
		type: String,
		required: true
	},
	"yurar_avto": {
		type: String,
		required: true
	},
	"tirkamali_avto": {
		type: String,
		required: true
	},
	"invinlab": {
		type: String,
		required: true
	},
	"boshqalab": {
		type: String,
		required: true
	},
	"mebel": {
		type: String,
		required: true
	},
	"smeta": {
		type: String,
		required: true
	},
	"birinchi": {
		type: String,
		required: true
	},
	"ikkinchi": {
		type: String,
		required: true
	},
	"uchinchi": {
		type: String,
		required: true
	},
	"xodimlar_soni": {
		type: String,
		required: true
	},
	"boshqaruv_xodim": {
		type: String,
		required: true
	},
	"tarkibiy_xodimlar": {
		type: String,
		required: true
	},
	"texnik_xodim": {
		type: String,
		required: true
	},
	"shartnoma_xodim": {
		type: String,
		required: true
	},
	"vakant": {
		type: String,
		required: true
	},
	"vakant_boshqaruv": {
		type: String,
		required: true
	},
	"vakant_ilmiy": {
		type: String,
		required: true
	},
	"vakant_texnik": {
		type: String,
		required: true
	},
	"ilmiy_loyihalar": {
		type: String,
		required: true
	},
	"buyurtma_loyihalar": {
		type: String,
		required: true
	},
	"grant_loyihalar": {
		type: String,
		required: true
	},
	"boshqa_loyihalar": {
		type: String,
		required: true
	},
	"ortacha_oylik": {
		type: String,
		required: true
	},
	"boshqaruv_oylik": {
		type: String,
		required: true
	},
	"tarkibi_oylik": {
		type: String,
		required: true
	},
	"texnik_oylik": {
		type: String,
		required: true
	},
	"fuqarolik_oylik": {
		type: String,
		required: true
	},
	"reja": {
		type: String,
		required: true
	},
	"ijara_yer": {
		type: String,
		required: true
	},
	"bino_yer": {
		type: String,
		required: true
	},
	"sotish_maxsulot": {
		type: String,
		required: true
	},
	"kochat_sotish": {
		type: String,
		required: true
	},
	"xizmar_korsatish": {
		type: String,
		required: true
	},
	"boshqa_yonalish": {
		type: String,
		required: true
	},
	"tushgan_mablag": {
		type: String,
		required: true
	},
	"birinchi_mablag": {
		type: String,
		required: true
	},
	"ikkinchi_mablag": {
		type: String,
		required: true
	},
	"uchinchi_mablag": {
		type: String,
		required: true
	},
}, { timestamps: true });

const FormData = mongoose.model('Data', formDataSchema);

// export default FormData schema;

module.exports = FormData;