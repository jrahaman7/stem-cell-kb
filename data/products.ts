// Source: FDA, "Approved Cellular and Gene Therapy Products" (CBER), retrieved Nov 15, 2026.
// Product names and manufacturers are as listed by FDA. The "category" is this portal's own
// grouping to help researchers browse; it is not an FDA classification.

export type Category =
  | "Stem / progenitor cell"
  | "Gene-modified stem cell"
  | "T-cell / immune cell"
  | "Tissue & other cell"
  | "Gene therapy (non-cell)";

export type Product = { name: string; generic: string; manufacturer: string; category: Category };

export const FDA_LIST_URL =
  "https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/approved-cellular-and-gene-therapy-products";
export const LIST_RETRIEVED = "November 15, 2026";

export const products: Product[] = [
  { name: "ABECMA", generic: "idecabtagene vicleucel", manufacturer: "Celgene Corporation, a Bristol-Myers Squibb Company", category: "T-cell / immune cell" },
  { name: "ADSTILADRIN", generic: "nadofaragene firadenovec-vncg", manufacturer: "Ferring Pharmaceuticals A/S", category: "Gene therapy (non-cell)" },
  { name: "ALLOCORD", generic: "HPC, Cord Blood", manufacturer: "SSM Cardinal Glennon Children's Medical Center", category: "Stem / progenitor cell" },
  { name: "AMTAGVI", generic: "lifileucel", manufacturer: "Iovance Biotherapeutics, Inc.", category: "T-cell / immune cell" },
  { name: "TREGZI", generic: "Allogeneic regulatory T cell immunotherapy with HSPC and T cells-vldq", manufacturer: "Orca Biosystems Inc", category: "Stem / progenitor cell" },
  { name: "AUCATZYL", generic: "obecabtagene autoleucel", manufacturer: "Autolus Limited", category: "T-cell / immune cell" },
  { name: "BEQVEZ", generic: "fidanacogene elaparvovec-dzkt", manufacturer: "Pfizer, Inc.", category: "Gene therapy (non-cell)" },
  { name: "BREYANZI", generic: "lisocabtagene maraleucel", manufacturer: "Juno Therapeutics, Inc., a Bristol-Myers Squibb Company", category: "T-cell / immune cell" },
  { name: "CARVYKTI", generic: "ciltacabtagene autoleucel", manufacturer: "Janssen Biotech, Inc.", category: "T-cell / immune cell" },
  { name: "CASGEVY", generic: "exagamglogene autotemcel [exa-cel]", manufacturer: "Vertex Pharmaceuticals Incorporated", category: "Gene-modified stem cell" },
  { name: "CLEVECORD", generic: "HPC, Cord Blood", manufacturer: "Cleveland Cord Blood Center", category: "Stem / progenitor cell" },
  { name: "Ducord", generic: "HPC, Cord Blood", manufacturer: "Duke University School of Medicine", category: "Stem / progenitor cell" },
  { name: "ELEVIDYS", generic: "delandistrogene moxeparvovec-rokl", manufacturer: "Sarepta Therapeutics, Inc.", category: "Gene therapy (non-cell)" },
  { name: "ENCELTO", generic: "revakinagene taroretcel-lwey", manufacturer: "Neurotech Pharmaceuticals, Inc.", category: "Tissue & other cell" },
  { name: "FAYUVI", generic: "rebisufligene etisparvovec-hopf", manufacturer: "Ultragenyx Pharmaceutical Inc.", category: "Gene therapy (non-cell)" },
  { name: "GENGLYCOS", generic: "pariglasgene brecaparvovec-opnr", manufacturer: "Ultragenyx Pharmaceutical Inc.", category: "Gene therapy (non-cell)" },
  { name: "GINTUIT", generic: "Allogeneic Cultured Keratinocytes and Fibroblasts in Bovine Collagen", manufacturer: "Organogenesis Incorporated", category: "Tissue & other cell" },
  { name: "HEMACORD", generic: "HPC, Cord Blood", manufacturer: "New York Blood Center", category: "Stem / progenitor cell" },
  { name: "HEMGENIX", generic: "etranacogene dezaparvovec-drlb", manufacturer: "CSL Behring LLC", category: "Gene therapy (non-cell)" },
  { name: "HPC, Cord Blood", generic: "HPC, Cord Blood", manufacturer: "Clinimmune Labs, University of Colorado Cord Blood Bank", category: "Stem / progenitor cell" },
  { name: "HPC, Cord Blood - MD Anderson", generic: "HPC, Cord Blood", manufacturer: "MD Anderson Cord Blood Bank", category: "Stem / progenitor cell" },
  { name: "HPC, Cord Blood - LifeSouth", generic: "HPC, Cord Blood", manufacturer: "LifeSouth Community Blood Centers, Inc.", category: "Stem / progenitor cell" },
  { name: "HPC, Cord Blood - Bloodworks", generic: "HPC, Cord Blood", manufacturer: "Bloodworks", category: "Stem / progenitor cell" },
  { name: "IMLYGIC", generic: "talimogene laherparepvec", manufacturer: "BioVex, Inc., a subsidiary of Amgen Inc.", category: "Gene therapy (non-cell)" },
  { name: "ITVISMA", generic: "onasemnogene abeparvovec-brve", manufacturer: "Novartis Gene Therapies, Inc.", category: "Gene therapy (non-cell)" },
  { name: "KEBILIDI", generic: "eladocagene exuparvovec-tneq", manufacturer: "PTC Therapeutics", category: "Gene therapy (non-cell)" },
  { name: "KRESLADI", generic: "marnetegragene autotemcel", manufacturer: "Rocket Pharmaceuticals, Inc.", category: "Gene-modified stem cell" },
  { name: "KYMRIAH", generic: "tisagenlecleucel", manufacturer: "Novartis Pharmaceuticals Corporation", category: "T-cell / immune cell" },
  { name: "LANTIDRA", generic: "donislecel", manufacturer: "CellTrans Inc.", category: "Tissue & other cell" },
  { name: "LAVIV", generic: "Azficel-T", manufacturer: "Fibrocell Technologies", category: "Tissue & other cell" },
  { name: "LENMELDY", generic: "atidarsagene autotemcel", manufacturer: "Orchard Therapeutics (Europe) Limited", category: "Gene-modified stem cell" },
  { name: "LUXTURNA", generic: "voretigene neparvovec-rzyl", manufacturer: "Spark Therapeutics, Inc.", category: "Gene therapy (non-cell)" },
  { name: "LYFGENIA", generic: "lovotibeglogene autotemcel [lovo-cel]", manufacturer: "bluebird bio, Inc.", category: "Gene-modified stem cell" },
  { name: "MACI", generic: "Autologous Cultured Chondrocytes on a Porcine Collagen Membrane", manufacturer: "Vericel Corp.", category: "Tissue & other cell" },
  { name: "OMISIRGE", generic: "omidubicel-onlv", manufacturer: "Gamida Cell Ltd.", category: "Stem / progenitor cell" },
  { name: "OTARMENI", generic: "lunsotogene parvec cwha", manufacturer: "Regeneron Pharmaceuticals, Inc.", category: "Gene therapy (non-cell)" },
  { name: "PAPZIMEOS", generic: "zopapogene imadenovec-drba", manufacturer: "Precigen, Inc.", category: "Gene therapy (non-cell)" },
  { name: "PROVENGE", generic: "sipuleucel-T", manufacturer: "Dendreon Corp.", category: "T-cell / immune cell" },
  { name: "REGENECYTE", generic: "HPC, Cord Blood", manufacturer: "StemCyte, Inc.", category: "Stem / progenitor cell" },
  { name: "RETHYMIC", generic: "allogeneic processed thymus tissue – agdc", manufacturer: "Enzyvant Therapeutics GmbH", category: "Tissue & other cell" },
  { name: "ROCTAVIAN", generic: "valoctocogene roxaparvovec-rvox", manufacturer: "BioMarin Pharmaceutical Inc", category: "Gene therapy (non-cell)" },
  { name: "RYONCIL", generic: "remestemcel-L-rknd", manufacturer: "Mesoblast, Inc.", category: "Stem / progenitor cell" },
  { name: "SYMVESS", generic: "acellular tissue engineered vessel-tyod", manufacturer: "Humacyte Global, Inc.", category: "Tissue & other cell" },
  { name: "SKYSONA", generic: "elivaldogene autotemcel", manufacturer: "bluebird bio, Inc.", category: "Gene-modified stem cell" },
  { name: "STRATAGRAFT", generic: "allogeneic cultured keratinocytes and dermal fibroblasts in murine collagen-dsat", manufacturer: "Stratatech Corporation", category: "Tissue & other cell" },
  { name: "TECARTUS", generic: "brexucabtagene autoleucel", manufacturer: "Kite Pharma, Inc.", category: "T-cell / immune cell" },
  { name: "TECELRA", generic: "afamitresgene autoleucel", manufacturer: "Adaptimmune LLC", category: "T-cell / immune cell" },
  { name: "TUDRIQEV", generic: "vusolimogene oderparepvec-wtpg", manufacturer: "Replimune, Inc.", category: "Gene therapy (non-cell)" },
  { name: "VOCERYQ", generic: "doruxapapogene ralaplasmid and lalikinogene sifuplasmid-gxfd", manufacturer: "Alliance Medical Products Inc. dba Siegfried (AMP), Irvine, CA", category: "Gene therapy (non-cell)" },
  { name: "VYJUVEK", generic: "beremagene geperpavec-svdt", manufacturer: "Krystal Biotech, Inc.", category: "Gene therapy (non-cell)" },
  { name: "WASKYRA", generic: "etuvetidigene autotemcel", manufacturer: "Fondazione Telethon ETS", category: "Gene-modified stem cell" },
  { name: "YESCARTA", generic: "axicabtagene ciloleucel", manufacturer: "Kite Pharma, Incorporated", category: "T-cell / immune cell" },
  { name: "ZEVASKYN", generic: "prademagene zamikeracel", manufacturer: "Abeona Therapeutics, Inc.", category: "Tissue & other cell" },
  { name: "ZYNTEGLO", generic: "betibeglogene autotemcel", manufacturer: "bluebird bio, Inc.", category: "Gene-modified stem cell" },
  { name: "ZOLGENSMA", generic: "onasemnogene abeparvovec-xioi", manufacturer: "Novartis Gene Therapies, Inc.", category: "Gene therapy (non-cell)" },
];

export const categories: Category[] = [
  "Stem / progenitor cell",
  "Gene-modified stem cell",
  "T-cell / immune cell",
  "Tissue & other cell",
  "Gene therapy (non-cell)",
];
