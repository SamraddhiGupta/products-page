
import React from 'react';
import './Products.css'; // Import your CSS file

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: 0,
      itemList: [  // Sample list of items
      "Abacavir", "Acalabrutinib", "Acebutolol", "Acetamenophen", "Acetaminophen",
      "Acetazolamide", "Aciclovir", "Acotiamide", "Acrivastine", "ADRENALINE",
      "AF38469", "Afatinib", "Agomelatine", "Albendazole", "Alfa Lipoic acid",
      "Alimemazine", "Aliskiren", "Alogliptin", "Alosetron", "Ambroxol",
      "AMG-510", "Amino acid", "Amino Acids", "Amiodarone", "Amlodipine",
      "Amodiaquine", "Amorolfine", "Amoxicillin", "Apalutamide", "Apixaban",
      "Apremilast", "Aripiprazole", "Atomoxetine", "Atorvastatin", "Atovaquone",
      "Avatrombopag", "Axitinib", "Azelnidipine", "Azilsartan", "Azithromycin",
      "Baclofen", "Baloxavir", "Baricitinib", "Barnidipine", "Bempedoic acid",
      "Benzbromarone", "Betahistine", "Betamethasone", "Betrixaban", "Bexagliflozin",
      "Bexarotene", "Bezafibrate", "Bictegravir", "Bilastine", "Bile acid", 
      "Bimatoprost", "Binimetinib", "Bisoprolol", "Blonanserin", "Bosutinib",
      "Brexpiprazole", "Brivanib", "Budesonide", "Bupropion", "Butylphthalide",
      "Cabotegravir", "Caffeine", "Canagliflozin", "Candesartan", "Canrenone",
      "Carbamazepine", "Carbodenafil", "Cariprazine", "Carisoprodol", "Carvedilol",
      "Cefixime", "CEFTAZIDIME", "Celecoxib", "Ceramide", "Ceritinib", "Cetirizine",
      "Chidamide", "CHIR99021", "Chlordiazepoxide", "Chloroquine", "Chlorphenamine",
      "Chlorpheniramine", "Chlorpromazine", "Chlorthalidone", "Chlorzoxazone",
      "Cholestane", "Cholesterolcholic Acid", "CHOLINE", "Cilostazol", "Cinacalcet",
      "Cinnarizine", "Ciprofibrate", "Ciprofloxacin", "Cisapride", "Citalopram",
      "Citicoline", "Citramalic", "Citronellyl", "Clascoterone", "Clenproperol",
      "Clevidipine", "Clidinium Bromide", "Clindamycin", "Clobetasol", "Clofentezine",
      "Clomipramine", "Clonidine", "Clopidogrel", "Clotrimazole", "Clozapine",
      "Curcumin", "Cyantraniliprole", "Cycloguanil", "Cyclosporin A",
      "Dabigatran", "Dabigatran impurity", "Dabrafenib", "Dantrolene", "Dapagliflozin",
      "Dapsone", "Darifenacin", "Darolutamide", "Dasatinib", "Deacetylnorgestimate",
      "Deferasirox", "Deflazacort", "Delamanid", "Demoxepam", "Desipramine",
      "Desonide", "Dexamethasone", "Dexketoprofen", "Dexlansoprazole", "Dextromethorphan",
      "Dextrorphan", "Diacetolol", "Diazepam", "Diclofenac", "Didesethyl", "Dienogest",
      "Dihydro", "Dihydrodydrogesterone", "Dimethyl Fumarate", "Diphenhydramine",
      "Docetaxel", "Dofetilide", "Dolutegravir", "Domperidone", "Donepezil", "Dopal",
      "Dorzolamide", "Doxazosin", "Doxepin", "Doxycycline", "Doxylamine", "Dronedarone",
      "Drospirenone", "Duloxetine", "Duocarmycin", "Dutasteride", "Duvelisib", "Dydrogesterone",
      "Edaravone", "Elobixibat", "Eltrombopag", "Eluxadoline", "Empagliflozin",
      "Enalapril", "Enalaprilat", "Enclomiphene", "Enzalutamide", "Eplerenone",
      "Equilin", "Erdosteine", "Erlotinib", "Esomeprazol", "Esomeprazole",
      "Estradiol", "Estrone", "Ethosuximide", "Ethynyl Estradiol", "Etilefrine",
      "Etonogestrel", "Etoricoxib", "Etoricoxibe", "Etravirine", "Exemestane", "Ezetimibe",
      "Farnesol", "Febuxostat", "Felodipine", "Fenofibrate", "Fenpiverinium", "Fexofenadine",
      "Finasteride", "Fingolimod", "Flecainide", "Flibanserin", "Fludrocortisone",
      "Flunisolide", "Fluphenazine", "Fluticasone", "Fluvastatin", "Folic acid",
      "Fomesafen", "Formoterol", "Fulvestrant", "Furosemide",
      "Gatifloxacin", "Gefintinib", "Gefitinib", "Gemcitabine", "Gestodene", "Gliclazide",
      "Glimepiride", "Glucagon", "Glucuronide", "Glycerol",
      "Haloperidol", "Hydrocortisone", "Hydroxycarbamide", "Hydroxychloroquine", "Hydroxyzine",
      "Ibrutinib", "Ibuprofen", "Idelalisib", "Iguratimod", "Iloperidone", "Imatinib",
      "Indacaterol", "Indirubin", "Indobufen", "Indoramin", "Inositol", "Ipratropium",
      "Irbesartan", "Irinotican", "Isavuconazole", "Isosorbide", "Itopride", "Itraconazole",
      "Ivabradine", "Ketoconazole", "Ketorolac",
      "Lacosamide", "Lamivudine", "Lansoprazole", "Lapatinib", "Lasmiditan", "LCQ-908",
      "Lenacapavir", "Lenalidomide", "Lenvatinib", "Lercanidipine", "Letermovir", "Levocloperastine",
      "Levofloxacin", "Levonorgestrel", "Levothyroxine", "Linagliptin", "Lincomycin", "Linezolid",
      "Liraglutide", "Lisinopril", "Loperamide", "Loratadine", "Losartan", "Loteprednol",
      "Lovastatin", "Loxoprofen", "Lubiprostone", "Lumefantrine", "Lurasidone",
      "Macitentan", "Mafosfamide", "Maraviroc", "Mebeverine", "Meclizine", "Medroxyprogesterone",
      "Mefena", "Mic", "Meloxicam", "Memantine", "Menbutone", "Mephenytoin", "Mequitazine",
      "Mesalamine", "Mesalazine", "Mesotrione", "Mestranol", "Metformin", "Methimazole",
      "Methocarbamol", "Methotrimeprazine", "Methsuximide", "Methyl Naltrexone", "METHYLCHOLINE",
      "Methyldopa", "Methylnaltrexone", "Methylprednisolone", "Metolazone", "Metoprolol", "Metronidazole",
      "Mexiletine", "Midodrine", "Midostaurin", "Mirabegron", "Mirtazapine", "Misoprostol", "MK-1775",
      "MK-1776", "Modafinil", "Molnupiravir", "Mometasone", "Montelukast", "Mycophenolate",
      "Mycophenolate Mofetil", "Mycophenolic acid", "myrcene",
      "NNitrosoNabilone", "Nadolol", "Naloxegol", "Naloxone", "Naltrexone", "Naproxen", "Naringenin",
      "Tacrolimus", "Tafamidis", "Tapentadol", "Tecovirimat", "Tedizolid", "Tegaserod", "Temozolomide",
      "Temsirolimus", "Teneligliptin", "Tenofovir", "Teriflunomide", "Testosterone", "Tetrabenazine",
      "Tetracycline", "Tetramethylpyrazine", "Tezacaftor", "Thalidomide", "Thiamine", "Thiothixenethyronine",
      "Tiaprofenic", "Tigecycline", "Tiopronin", "Tiotropium", "Tizanidine", "Tolbutamide", "Tolcapone",
      "Tolterodine", "Topiramate", "Trandolapril", "Trandolaprilat", "Tranexamic acid", "Trazodone",
      "Trelagliptin", "Triamcinolone", "Triamterene", "Triclabendazole", "Triclabendazole Sulfoxide",
      "Triflunisal", "Trifluoperazine", "Trimetazidine", "Trimethobenzamide", "Trimethoprim", "Tryptanthrin",
      "Tyrosol", "Upadacitinib", "Uridine",
      "Vadadustat", "Valproic acid", "Valsartan", "VANCOMYCIN", "Vardenafil", "Venetoclax",
      "Venlafaxine", "Verapamil", "Veratric Acid", "Vericiguat", "Vilazodone", "Voriconazole",
      "Vortioxetine", "VX-984", "Warfarin",
      "Zafirlukast", "Ziprasidone", "Zolpidem", "Zopiclone", "Zuclomiphene"
      ]
    };
    this.filteredList = this.filteredList.bind(this);
  }

  handleButtonClick(index) {
    this.setState({ selectedButton: index });
}

filteredList() {
    const { selectedButton, itemList } = this.state;
    if (selectedButton === null) {
        return itemList;
    }
    const startChar = String.fromCharCode(65 + selectedButton);
    return itemList.filter(item => item.startsWith(startChar));
}
render() {
    const { selectedButton } = this.state;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    // Define the number of items per row
    const itemsPerRow = 4;
  
    // Organize buttons into rows
    const buttonsRow = [];
    for (let i = 0; i < alphabet.length; i++) {
        buttonsRow.push(
            <button
                key={i}
                className={`square-button ${selectedButton === i ? 'selected' : ''}`}
                onClick={() => this.handleButtonClick(i)}
            >
                {alphabet[i]}
            </button>
        );
    }
  
    // Organize filtered items into rows with 4 columns
    const filteredItems = this.filteredList();
    const itemsRows = [];
    for (let i = 0; i < Math.ceil(filteredItems.length / itemsPerRow); i++) {
        const row = [];
        for (let j = 0; j < itemsPerRow; j++) {
            const index = i * itemsPerRow + j;
            if (index < filteredItems.length) {
                row.push(
                  <div key={index} className="item-col">
                    <span className="item-text">
                      <div className="icon-box">
                        <i className="fas fa-angle-right icon"></i>
                      </div>
                      {filteredItems[index]}
                    </span>
                  </div>
                );
            }
        }
        itemsRows.push(<div key={i} className="item-row">{row}</div>);
    }
  
    return (
        <div>
            <section className="Custom">
                <div className="container">
                    <h3>BY API STANDARDS</h3>
                    <div className="right-side">
                        <h5>Home  <i className="fas fa-angle-right"></i>  Products<i className="fas fa-angle-right"></i> By API Standards </h5>
                    </div>
                </div>
            </section>
            <section className="Buttons">
                <div className="container">
                    <div className="button-container">
                        {buttonsRow}
                    </div>
                </div>
            </section>
            <section className="List">
                <div className="container">
                    <h3 className="list-heading">API STANDARDS</h3>
                    <div className="items-container">
                        {itemsRows}
                    </div>
                </div>
            </section>
        </div>
    );
  }
  
  
  
}
export default Products;