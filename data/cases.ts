// Successful cases in stem cell and cell therapy, compiled Nov 16, 2026 from the research report
// "Stem cell therapy success cases" (FDA approvals, labels, peer-reviewed papers, trade press).
// Figures describe trial populations, not results promised to any one patient.
// check: true means at least one figure on the card came from a secondary source and should be
// confirmed against the current FDA label (DailyMed) before citing.

export type CaseGroup =
  | "Gene-corrected stem cells"
  | "Blood & immune rebuild"
  | "Engineered immune cells"
  | "Tissue & organ repair"
  | "Next wave (investigational)";

export type Status = "FDA-approved" | "Investigational";
export type Evidence = "Randomized" | "Intrapatient control" | "Natural-history control" | "Single-arm" | "Legacy registry data" | "Case series";
export type Source = "Autologous (patient's own cells)" | "Allogeneic (donor cells)";

export type SuccessCase = {
  id: string;
  product: string;
  generic: string;
  condition: string;
  approved: string;
  source: Source;
  group: CaseGroup;
  status: Status;
  evidence: Evidence;
  stat: string;
  statLabel: string;
  outcome: string;
  safety: string;
  lesson: string;
  ref: { title: string; url: string };
  check?: boolean;
};

const A: Source = "Autologous (patient's own cells)";
const D: Source = "Allogeneic (donor cells)";

export const cases: SuccessCase[] = [
  // ---------- Gene-corrected stem cells ----------
  {
    id: "casgevy", product: "CASGEVY", generic: "exagamglogene autotemcel",
    condition: "Sickle cell disease and transfusion-dependent beta-thalassemia (age 2+ since Jul 2026)",
    approved: "Dec 8, 2023 (SCD); Jan 16, 2024 (TDT); Jul 1, 2026 (age 2+)", source: A,
    group: "Gene-corrected stem cells", status: "FDA-approved", evidence: "Single-arm",
    stat: "29 of 31", statLabel: "free of severe sickle cell crises for 12+ months",
    outcome: "The patient's own blood stem cells are edited with CRISPR/Cas9 and returned once. 29 of 31 evaluable adults and teens had no severe crises for at least 12 months. In children 5–11, 8 of 8 with sickle cell were crisis-free and 8 of 9 with thalassemia stopped transfusions.",
    safety: "No boxed warning. Requires chemotherapy conditioning (low blood counts, mouth sores, febrile neutropenia).",
    lesson: "First CRISPR medicine in the US: proof that a fully personalized, edited stem cell product can clear FDA.",
    ref: { title: "FDA: first gene therapies for sickle cell disease", url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease" },
  },
  {
    id: "lyfgenia", product: "LYFGENIA", generic: "lovotibeglogene autotemcel",
    condition: "Sickle cell disease with a history of vaso-occlusive events (age 12+)",
    approved: "Dec 8, 2023", source: A, group: "Gene-corrected stem cells", status: "FDA-approved", evidence: "Single-arm",
    stat: "88%", statLabel: "complete resolution of vaso-occlusive events (28 of 32), months 6–18",
    outcome: "A lentiviral vector adds a working beta-globin gene to the patient's own stem cells. 28 of 32 patients had no vaso-occlusive events between 6 and 18 months after infusion.",
    safety: "Boxed warning for blood cancer; lifelong monitoring.",
    lesson: "Approved the same day as CASGEVY: two engineering routes (gene addition vs editing) for one disease.",
    ref: { title: "FDA: first gene therapies for sickle cell disease", url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease" },
  },
  {
    id: "zynteglo", product: "ZYNTEGLO", generic: "betibeglogene autotemcel",
    condition: "Beta-thalassemia needing regular transfusions (adults and children)",
    approved: "Aug 17, 2022", source: A, group: "Gene-corrected stem cells", status: "FDA-approved", evidence: "Single-arm",
    stat: "89%", statLabel: "of 41 patients transfusion-independent for 12+ months",
    outcome: "One dose of the patient's own gene-modified stem cells. 89% of 41 patients stopped needing red cell transfusions for at least a year with stable hemoglobin.",
    safety: "No boxed warning; possible blood cancer risk (none seen); monitor 15+ years.",
    lesson: "First cell-based gene therapy for beta-thalassemia, each dose made from one patient's own marrow.",
    ref: { title: "ASCO Post: FDA approves Zynteglo", url: "https://ascopost.com/news/august-2022/fda-approves-first-cell-based-gene-therapy-to-treat-adult-and-pediatric-patients-with-beta-thalassemia-who-require-regular-blood-transfusions" },
  },
  {
    id: "skysona", product: "SKYSONA", generic: "elivaldogene autotemcel",
    condition: "Early active cerebral adrenoleukodystrophy in boys without a matched donor",
    approved: "Sep 16, 2022 (accelerated); restricted Aug 2025", source: A, group: "Gene-corrected stem cells", status: "FDA-approved", evidence: "Natural-history control",
    stat: "72% vs 43%", statLabel: "alive without major disability at 24 months, treated vs untreated",
    outcome: "The boy's own stem cells receive a working ABCD1 gene. At 24 months, 72% of treated boys were alive without major functional disability versus 43% in natural-history patients.",
    safety: "Boxed warning: blood cancers rose from 3 of 67 to 10 of 67 by July 2025; FDA limited use to boys with no matched donor.",
    lesson: "The clearest example of risk emerging years after approval: long-term follow-up matters.",
    ref: { title: "FDA: labeling changes for hematologic malignancy risk", url: "https://www.fda.gov/vaccines-blood-biologics/fda-approves-required-labeling-changes-increased-risk-hematologic-malignancy-following-treatment" },
  },
  {
    id: "lenmeldy", product: "LENMELDY", generic: "atidarsagene autotemcel",
    condition: "Metachromatic leukodystrophy (MLD) in children",
    approved: "Mar 18, 2024", source: A, group: "Gene-corrected stem cells", status: "FDA-approved", evidence: "Natural-history control",
    stat: "100% vs 58%", statLabel: "alive at age 6, treated vs untreated (presymptomatic late infantile)",
    outcome: "The child's stem cells get a working ARSA gene. Across 37 treated children, severe motor impairment or death fell sharply; 71% walked unaided at age 5 and 85% had normal language and IQ scores.",
    safety: "No boxed warning; no blood cancers seen. Monitor 15+ years.",
    lesson: "Works when given before symptoms: makes the case for newborn screening.",
    ref: { title: "FDA: first gene therapy for children with MLD", url: "https://www.biospace.com/fda-approves-first-gene-therapy-for-children-with-metachromatic-leukodystrophy" },
  },
  {
    id: "waskyra", product: "WASKYRA", generic: "etuvetidigene autotemcel",
    condition: "Wiskott-Aldrich syndrome (age 6 months+, no matched related donor)",
    approved: "Dec 9, 2025", source: A, group: "Gene-corrected stem cells", status: "FDA-approved", evidence: "Single-arm",
    stat: "−93%", statLabel: "severe infections, months 6–18 vs year before treatment",
    outcome: "Gene-corrected stem cells from 27 patients. Severe infections fell 93% and moderate-to-severe bleeding fell 60%; most patients were bleed-free at 4 years.",
    safety: "No boxed warning reported. Rash, respiratory infection, febrile neutropenia, liver injury.",
    lesson: "Developed by a non-profit (Fondazione Telethon): an alternative sponsor model for ultra-rare disease.",
    ref: { title: "FDA: first gene therapy for Wiskott-Aldrich syndrome", url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapy-treatment-wiskott-aldrich-syndrome" },
  },
  {
    id: "kresladi", product: "KRESLADI", generic: "marnetegragene autotemcel",
    condition: "Severe leukocyte adhesion deficiency type I in children without a matched sibling donor",
    approved: "Mar 26, 2026 (accelerated)", source: A, group: "Gene-corrected stem cells", status: "FDA-approved", evidence: "Single-arm",
    stat: "100%", statLabel: "survival in a 9-child trial",
    outcome: "Stem cells corrected with the ITGB2 gene. FDA's decision rested on restored CD18/CD11a on white cells at 12 months, sustained to 24 months.",
    safety: "No boxed warning reported. Confirmatory evidence required for full approval.",
    lesson: "Accelerated approval on a biomarker with only 9 patients: a template for ultra-rare indications.",
    ref: { title: "FDA: first gene therapy for LAD-I", url: "https://fda.gov/news-events/press-announcements/fda-approves-first-gene-therapy-severe-leukocyte-adhesion-deficiency-type-i" },
    check: true,
  },

  // ---------- Blood & immune rebuild ----------
  {
    id: "tregzi", product: "TREGZI", generic: "Orca-T; regulatory T cells with HSPCs and T cells",
    condition: "Adults with blood cancers having matched-donor transplant",
    approved: "Jun 30, 2026", source: D, group: "Blood & immune rebuild", status: "FDA-approved", evidence: "Randomized",
    stat: "78% vs 38%", statLabel: "1-year survival free of moderate-to-severe chronic GVHD",
    outcome: "A precision-engineered donor graft tested against a standard transplant in 187 patients. Chronic GVHD fell from 44% to 13% and non-relapse deaths from 13% to 3% (HR 0.26).",
    safety: "Warnings: graft failure, GVHD, infusion reactions, secondary cancers. List price $428,000.",
    lesson: "Strongest randomized win among stem/progenitor products.",
    ref: { title: "Orca Bio: TREGZI FDA approval", url: "https://www.businesswire.com/news/home/20260630929266/en/Orca-Bios-TREGZI-Receives-U.S.-FDA-Approval-as-First-and-Only-Precision-Engineered-Cell-Therapy-for-Allogeneic-Transplant-in-Adults-with-Hematological-Malignancies" },
    check: true,
  },
  {
    id: "omisirge", product: "OMISIRGE", generic: "omidubicel-onlv",
    condition: "Blood cancers needing cord blood transplant (age 12+); severe aplastic anemia (Dec 2025)",
    approved: "Apr 17, 2023", source: D, group: "Blood & immune rebuild", status: "FDA-approved", evidence: "Randomized",
    stat: "12 vs 22 days", statLabel: "median neutrophil recovery vs standard cord blood",
    outcome: "Cord blood expanded with nicotinamide, tested against standard cord blood in 125 patients. White cells recovered faster and serious infections by day 100 fell from 60% to 39%.",
    safety: "Boxed warning: infusion reactions, GVHD, engraftment syndrome, graft failure.",
    lesson: "Expanded cord blood widens donor options for patients without a matched adult donor.",
    ref: { title: "FDA approval via BioSpace", url: "https://www.biospace.com/fda-approves-cell-therapy-for-patients-with-blood-cancers-to-reduce-risk-of-infection-following-stem-cell-transplantation" },
  },
  {
    id: "ryoncil", product: "RYONCIL", generic: "remestemcel-L-rknd",
    condition: "Steroid-refractory acute GVHD in children (2 months+)",
    approved: "Dec 18, 2024", source: D, group: "Blood & immune rebuild", status: "FDA-approved", evidence: "Single-arm",
    stat: "70%", statLabel: "overall response at day 28 (54 children)",
    outcome: "Donor bone-marrow mesenchymal stromal cells in 54 children, 89% with grade C/D disease. 30% had complete and 41% partial responses by day 28.",
    safety: "Infections, fever, edema, bleeding, hypertension. Boxed-warning status to confirm on label.",
    lesson: "The only FDA-approved MSC product, reached after rejections in 2020 and 2023 over potency assays.",
    ref: { title: "CancerNetwork: FDA approves remestemcel-L", url: "https://www.cancernetwork.com/view/fda-approves-remestemcel-l-in-pediatric-sr-agvhd" },
    check: true,
  },
  {
    id: "cordblood", product: "HPC, Cord Blood (9 licensed banks)", generic: "HEMACORD, DUCORD, ALLOCORD, CLEVECORD, REGENECYTE and 4 more",
    condition: "Unrelated-donor transplant to rebuild blood and immune function",
    approved: "Nov 2011 (HEMACORD) to Nov 2024 (REGENECYTE)", source: D, group: "Blood & immune rebuild", status: "FDA-approved", evidence: "Legacy registry data",
    stat: "9", statLabel: "public and commercial cord blood banks licensed",
    outcome: "FDA licensed cord blood from New York Blood Center, ClinImmune, Duke, Cardinal Glennon, LifeSouth, Bloodworks, Cleveland, MD Anderson and StemCyte on existing transplant outcome data, without new trials.",
    safety: "Class warnings for fatal infusion reactions, GVHD, engraftment syndrome and graft failure.",
    lesson: "The oldest licensed stem cell product class in the US, and the first commercial license (StemCyte) came only in 2024.",
    ref: { title: "FDA: cord blood products FAQ", url: "https://www.fda.gov/vaccines-blood-biologics/industry-biologics/frequently-asked-questions-about-minimally-manipulated-unrelated-cord-blood-products-clinical-use" },
    check: true,
  },
  {
    id: "rethymic", product: "RETHYMIC", generic: "allogeneic processed thymus tissue-agdc",
    condition: "Congenital athymia in children",
    approved: "Oct 8, 2021", source: D, group: "Blood & immune rebuild", status: "FDA-approved", evidence: "Natural-history control",
    stat: "77%", statLabel: "survival at 1 year (76% at 2 years)",
    outcome: "Children born without a thymus usually die by age 2–3. Across 105 children, implanted donor thymus gave 77% survival at 1 year, and 94% of 1-year survivors were alive at a median 10.7 years.",
    safety: "Hypertension, cytokine release, rash, low platelets, GVHD.",
    lesson: "Dose is sized to each child's body surface area: early patient-customized tissue dosing.",
    ref: { title: "Medthority: Rethymic approval data", url: "https://www.medthority.com/news/2021/10/fda-approves-rethymic--for-pediatric-congenital-athymia.--enzyvant" },
  },

  // ---------- Engineered immune cells ----------
  {
    id: "kymriah", product: "KYMRIAH", generic: "tisagenlecleucel",
    condition: "B-cell acute lymphoblastic leukemia (ALL) up to age 25; DLBCL; follicular lymphoma",
    approved: "Aug 30, 2017 (first CAR-T)", source: A, group: "Engineered immune cells", status: "FDA-approved", evidence: "Single-arm",
    stat: "83%", statLabel: "remission within 3 months (63 patients, ELIANA)",
    outcome: "The patient's own T cells engineered with a CD19 CAR. 83% of children and young adults with relapsed leukemia went into remission.",
    safety: "Boxed warning: cytokine release syndrome, neurotoxicity, secondary T-cell cancers.",
    lesson: "First CAR-T and first gene therapy approved in the US.",
    ref: { title: "NCI: tisagenlecleucel approval", url: "https://www.cancer.gov/news-events/cancer-currents-blog/2017/tisagenlecleucel-fda-childhood-leukemia" },
  },
  {
    id: "yescarta", product: "YESCARTA", generic: "axicabtagene ciloleucel",
    condition: "Large B-cell lymphoma (2nd line+); follicular lymphoma",
    approved: "Oct 18, 2017; 2nd line Apr 1, 2022", source: A, group: "Engineered immune cells", status: "FDA-approved", evidence: "Randomized",
    stat: "8.3 vs 2.0 mo", statLabel: "median event-free survival vs standard care (ZUMA-7, n=359)",
    outcome: "In a randomized trial against standard chemotherapy and transplant, CAR-T cut the risk of an event by 60% (HR 0.40); response rate 83% vs 50%.",
    safety: "Boxed warning: CRS (90%), neurotoxicity (78%), secondary T-cell cancers.",
    lesson: "Moved CAR-T earlier in treatment by beating standard of care head-to-head.",
    ref: { title: "ASCO Post: axi-cel second-line approval", url: "https://ascopost.com/issues/april-25-2022/fda-approves-axicabtagene-ciloleucel-for-the-second-line-treatment-of-large-b-cell-lymphoma" },
  },
  {
    id: "tecartus", product: "TECARTUS", generic: "brexucabtagene autoleucel",
    condition: "Mantle cell lymphoma; adult B-cell acute lymphoblastic leukemia",
    approved: "Jul 24, 2020 (MCL); Oct 1, 2021 (ALL)", source: A, group: "Engineered immune cells", status: "FDA-approved", evidence: "Single-arm",
    stat: "87%", statLabel: "response rate in mantle cell lymphoma (ZUMA-2)",
    outcome: "CD19 CAR-T for relapsed mantle cell lymphoma (62% complete responses) and adult ALL (about half in complete remission).",
    safety: "Boxed warning: CRS, neurotoxicity, secondary T-cell cancers.",
    lesson: "First CAR-T for mantle cell lymphoma.",
    ref: { title: "OncLive: CAR-T class boxed warning", url: "https://onclive.com/view/fda-requests-class-wide-boxed-warning-for-car-t-cell-agents-regarding-secondary-t-cell-malignancy-risk" },
    check: true,
  },
  {
    id: "breyanzi", product: "BREYANZI", generic: "lisocabtagene maraleucel",
    condition: "Large B-cell, follicular, mantle cell and marginal zone lymphoma; CLL/SLL",
    approved: "Feb 5, 2021; marginal zone Dec 4, 2025", source: A, group: "Engineered immune cells", status: "FDA-approved", evidence: "Single-arm",
    stat: "84.4%", statLabel: "response rate in marginal zone lymphoma (77 patients)",
    outcome: "A CD19 CAR-T with a defined CD8:CD4 mix, now approved across six B-cell cancers. In marginal zone lymphoma, 55.8% had complete responses.",
    safety: "Boxed warning: CRS, neurotoxicity, secondary T-cell cancers.",
    lesson: "Broadest CAR-T label: one product expanded through many single-indication trials.",
    ref: { title: "ASCO Post: liso-cel for marginal zone lymphoma", url: "https://ascopost.com/news/december-2025/fda-approves-car-t-cell-therapy-for-relapsedrefractory-marginal-zone-lymphoma/" },
  },
  {
    id: "abecma", product: "ABECMA", generic: "idecabtagene vicleucel",
    condition: "Relapsed/refractory multiple myeloma",
    approved: "Mar 26, 2021; 3rd line Apr 4, 2024", source: A, group: "Engineered immune cells", status: "FDA-approved", evidence: "Randomized",
    stat: "13.3 vs 4.4 mo", statLabel: "median progression-free survival vs standard regimens (KarMMa-3)",
    outcome: "First BCMA CAR-T. In 386 randomized patients, it more than doubled progression-free survival (HR 0.49); response 71% vs 42%.",
    safety: "Boxed warning: CRS, neurotoxicity, HLH/MAS, prolonged low blood counts, secondary T-cell cancers.",
    lesson: "First cell therapy for myeloma.",
    ref: { title: "ASCO Post: cilta-cel and ide-cel approvals", url: "https://ascopost.com/news/april-2024/ciltacabtagene-autoleucel-and-idecabtagene-vicleucel-approved-by-the-fda-for-pretreated-patients-with-multiple-myeloma" },
  },
  {
    id: "carvykti", product: "CARVYKTI", generic: "ciltacabtagene autoleucel",
    condition: "Relapsed/refractory multiple myeloma (lenalidomide-refractory, 2nd line+)",
    approved: "Feb 28, 2022; 2nd line Apr 5, 2024", source: A, group: "Engineered immune cells", status: "FDA-approved", evidence: "Randomized",
    stat: "HR 0.55", statLabel: "risk of death vs standard care (CARTITUDE-4)",
    outcome: "In 419 randomized patients, BCMA CAR-T cut progression risk by 71% (HR 0.29) and death risk by 45% at 33.6 months.",
    safety: "Boxed warning: CRS, neurotoxicity incl. parkinsonism and Guillain-Barré, HLH, low blood counts, secondary cancers.",
    lesson: "Clearest overall-survival benefit for any CAR-T.",
    ref: { title: "ASCO Post: CARTITUDE-4 updated analysis", url: "https://ascopost.com/news/january-2026/updated-analysis-of-cartitude-4-cilta-cel-in-lenalidomide-refractory-multiple-myeloma/" },
  },
  {
    id: "aucatzyl", product: "AUCATZYL", generic: "obecabtagene autoleucel",
    condition: "Adult relapsed/refractory B-cell acute lymphoblastic leukemia",
    approved: "Nov 8, 2024", source: A, group: "Engineered immune cells", status: "FDA-approved", evidence: "Single-arm",
    stat: "42%", statLabel: "complete remission within 3 months (27 of 65)",
    outcome: "A CD19 CAR with a fast off-rate binder designed to lower toxicity; median remission lasted 14.1 months.",
    safety: "Severe CRS only 3% and severe ICANS 7%; no REMS required.",
    lesson: "Shows CAR design can trade some potency for much lower toxicity.",
    ref: { title: "ASCO Post: obe-cel approval", url: "https://ascopost.com/news/november-2024/fda-approves-novel-t-cell-immunotherapy-for-adults-with-relapsed-or-refractory-b-cell-precursor-acute-lymphoblastic-leukemia" },
  },
  {
    id: "amtagvi", product: "AMTAGVI", generic: "lifileucel",
    condition: "Advanced melanoma after anti-PD-1 therapy",
    approved: "Feb 16, 2024 (accelerated)", source: A, group: "Engineered immune cells", status: "FDA-approved", evidence: "Single-arm",
    stat: "31.5%", statLabel: "response rate (of 73 patients)",
    outcome: "Tumor-infiltrating lymphocytes grown from the patient's own tumor. About 1 in 3 patients whose melanoma had failed immunotherapy responded, many durably.",
    safety: "Boxed warning: treatment-related death, prolonged cytopenia, severe infection, organ impairment.",
    lesson: "First cell therapy for a solid tumor, made from the patient's own tumor.",
    ref: { title: "FDA: lifileucel accelerated approval", url: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-lifileucel-unresectable-or-metastatic-melanoma" },
  },
  {
    id: "tecelra", product: "TECELRA", generic: "afamitresgene autoleucel",
    condition: "Metastatic synovial sarcoma (HLA-A*02, MAGE-A4 positive)",
    approved: "Aug 2, 2024 (accelerated)", source: A, group: "Engineered immune cells", status: "FDA-approved", evidence: "Single-arm",
    stat: "43.2%", statLabel: "response rate (44 patients infused)",
    outcome: "T cells engineered with a MAGE-A4 T-cell receptor. 39% of responders were still responding at 12 months.",
    safety: "Boxed warning: serious or fatal cytokine release syndrome.",
    lesson: "First engineered TCR therapy: patient selection by HLA type is built into the label.",
    ref: { title: "FDA: afami-cel accelerated approval", url: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-afamitresgene-autoleucel-unresectable-or-metastatic-synovial-sarcoma" },
  },
  {
    id: "provenge", product: "PROVENGE", generic: "sipuleucel-T",
    condition: "Metastatic castration-resistant prostate cancer",
    approved: "Apr 29, 2010", source: A, group: "Engineered immune cells", status: "FDA-approved", evidence: "Randomized",
    stat: "25.8 vs 21.7 mo", statLabel: "median overall survival vs placebo (IMPACT, n=512)",
    outcome: "The patient's own antigen-presenting cells are activated and returned. It reduced risk of death by 22% (HR 0.78) without slowing measured progression.",
    safety: "Infusion reactions; no boxed warning reported.",
    lesson: "First autologous cell therapy approved, and still the only one approved on an overall-survival endpoint.",
    ref: { title: "NEJM IMPACT trial (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/20818862/" },
    check: true,
  },

  // ---------- Tissue & organ repair ----------
  {
    id: "lantidra", product: "LANTIDRA", generic: "donislecel",
    condition: "Type 1 diabetes with repeated severe hypoglycemia (adults)",
    approved: "Jun 28, 2023", source: D, group: "Tissue & organ repair", status: "FDA-approved", evidence: "Single-arm",
    stat: "21 of 30", statLabel: "insulin-free for a year or more",
    outcome: "Donor pancreatic islets infused into the liver. 21 of 30 needed no insulin for at least a year, and 10 stayed insulin-free more than five years.",
    safety: "Lifelong immunosuppression; procedure risks.",
    lesson: "First cell therapy for type 1 diabetes and the precedent for stem-cell-derived islets.",
    ref: { title: "BioSpace: first cell therapy for T1D", url: "https://www.biospace.com/article/fda-approves-first-cell-therapy-for-type-1-diabetes-/" },
  },
  {
    id: "zevaskyn", product: "ZEVASKYN", generic: "prademagene zamikeracel",
    condition: "Wounds in recessive dystrophic epidermolysis bullosa",
    approved: "Apr 29, 2025", source: A, group: "Tissue & organ repair", status: "FDA-approved", evidence: "Intrapatient control",
    stat: "81% vs 16%", statLabel: "wounds 50%+ healed at 6 months, treated vs control",
    outcome: "The patient's own skin cells are gene-corrected to make type VII collagen and grafted as sheets. 43 wound pairs were compared within the same patients.",
    safety: "No treatment-related serious adverse events.",
    lesson: "A one-time, patient-specific surgical product with healing seen up to 8 years.",
    ref: { title: "Drugs.com: FDA approves Zevaskyn", url: "https://www.drugs.com/news/fda-approves-zevaskyn-rare-genetic-skin-disorder-124737.html" },
  },
  {
    id: "maci", product: "MACI", generic: "autologous cultured chondrocytes on porcine collagen membrane",
    condition: "Full-thickness knee cartilage defects (adults). Not approved for osteoarthritis or general knee arthritis",
    approved: "Dec 2016", source: A, group: "Tissue & organ repair", status: "FDA-approved", evidence: "Randomized",
    stat: "5 years", statLabel: "benefit sustained vs microfracture (128 of 144 followed)",
    outcome: "The patient's own cartilage cells are grown on a membrane and implanted. In 144 randomized patients, knee pain and function improved significantly more than with microfracture at 2 years.",
    safety: "Joint pain, graft overgrowth; porcine/bovine allergy contraindication.",
    lesson: "One of the few cell products with a randomized surgical comparator and 5-year data.",
    ref: { title: "OrthoWorld: MACI approval", url: "https://www.orthoworld.com/?p=7094" },
    check: true,
  },
  {
    id: "stratagraft", product: "STRATAGRAFT", generic: "allogeneic keratinocytes and fibroblasts in murine collagen",
    condition: "Deep partial-thickness thermal burns (adults)",
    approved: "Jun 2021", source: D, group: "Tissue & organ repair", status: "FDA-approved", evidence: "Intrapatient control",
    stat: "96%", statLabel: "of sites spared an autograft donor wound (68 of 71)",
    outcome: "Lab-grown donor skin compared with the patient's own skin graft in the same patient. Durable wound closure at 3 months was 83% vs 86%.",
    safety: "Itching 11%; xenotransplant rules mean patients cannot donate blood or tissue.",
    lesson: "Success defined practically: nearly as good as an autograft without a second wound.",
    ref: { title: "FDA: StrataGraft label", url: "https://www.fda.gov/media/150129/download" },
  },
  {
    id: "encelto", product: "ENCELTO", generic: "revakinagene taroretcel-lwey",
    condition: "Macular telangiectasia type 2 (adults)",
    approved: "Mar 2025", source: D, group: "Tissue & organ repair", status: "FDA-approved", evidence: "Randomized",
    stat: "54.8%", statLabel: "slower photoreceptor loss vs sham (trial 1; 30.6% in trial 2)",
    outcome: "An encapsulated cell implant in the eye that releases CNTF. Two sham-controlled trials in 228 patients both met their 24-month endpoint.",
    safety: "Delayed dark adaptation (~20%) and small pupils (~15%).",
    lesson: "First encapsulated-cell therapy approved; the capsule shields donor cells from the immune system.",
    ref: { title: "NEI: long-term benefit of implant", url: "https://www.nei.nih.gov/about/news-and-events/news/study-confirms-long-term-benefit-implant-blinding-eye-disease" },
  },
  {
    id: "symvess", product: "SYMVESS", generic: "acellular tissue engineered vessel-tyod",
    condition: "Extremity arterial injury needing urgent bypass (adults)",
    approved: "Dec 19, 2024", source: D, group: "Tissue & organ repair", status: "FDA-approved", evidence: "Single-arm",
    stat: "84.3%", statLabel: "vessels open at day 30 (43 of 51)",
    outcome: "A vessel grown from donor cells and then decellularized. Amputation was 9.8% and graft infection 2% in trauma patients, compared with published synthetic-graft rates of 24.3% and 8.4%.",
    safety: "Graft rupture and thrombosis warnings.",
    lesson: "Cells as a manufacturing tool: the final product contains no living cells.",
    ref: { title: "JAMA Surgery: V005 trial", url: "https://jamanetwork.com/journals/jamasurgery/article-abstract/2826564" },
  },
  {
    id: "laviv", product: "LAVIV", generic: "azficel-T",
    condition: "Moderate-to-severe nasolabial fold wrinkles (adults)",
    approved: "Jun 2011", source: A, group: "Tissue & organ repair", status: "FDA-approved", evidence: "Randomized",
    stat: "30% vs 8%", statLabel: "responders at 6 months vs placebo (evaluator-rated)",
    outcome: "The patient's own cultured skin fibroblasts injected into wrinkles; two placebo-controlled trials in 421 patients.",
    safety: "Injection-site reactions. Reported as discontinued.",
    lesson: "First autologous cellular aesthetic product; commercial success did not follow regulatory success.",
    ref: { title: "Practical Dermatology: LAVIV efficacy data", url: "https://practicaldermatology.com/news/20120418-efficacy_data_for_laviv_now_published" },
    check: true,
  },
  {
    id: "gintuit", product: "GINTUIT", generic: "allogeneic keratinocytes and fibroblasts in bovine collagen",
    condition: "Gum tissue repair in mucogingival surgery (adults)",
    approved: "Mar 2012", source: D, group: "Tissue & organ repair", status: "FDA-approved", evidence: "Intrapatient control",
    stat: "≥50%", statLabel: "of patients gained 2 mm+ of keratinized gum tissue",
    outcome: "A donor-cell dressing that regrows gum tissue without harvesting tissue from the patient's palate.",
    safety: "Sinusitis, mouth ulcers, local pain.",
    lesson: "First allogeneic cell product for dentistry.",
    ref: { title: "DrBicuspid: FDA approves Gintuit", url: "https://www.drbicuspid.com/dental-specialties/periodontics/article/15364388/fda-approves-cell-based-product-for-mucogingival-conditions" },
    check: true,
  },

  // ---------- Next wave (investigational) ----------
  {
    id: "zimislecel", product: "Zimislecel (VX-880)", generic: "stem cell-derived islets (Vertex)",
    condition: "Type 1 diabetes with impaired hypoglycemia awareness",
    approved: "NEJM 2025; update Oct 2026", source: D, group: "Next wave (investigational)", status: "Investigational", evidence: "Single-arm",
    stat: "10 of 12", statLabel: "insulin-free at one year (full dose)",
    outcome: "Islets grown from pluripotent stem cells. In the Oct 2026 update all 12 had HbA1c below 7%, and time in target range rose from 49.5% to 93.3%.",
    safety: "Chronic immunosuppression; 2 deaths reported as unrelated. Phase 3 enrolling; no US filing confirmed.",
    lesson: "A manufactured islet supply could end the donor-pancreas bottleneck.",
    ref: { title: "MedCity: zimislecel results", url: "https://medcitynews.com/2025/06/vertex-pharmaceuticals-type-1-diabetes-cell-therapy-zimislecel-insulin-vrtx/" },
  },
  {
    id: "up421", product: "UP421 (Sana / Uppsala)", generic: "hypoimmune gene-edited donor islets",
    condition: "Type 1 diabetes, without immunosuppression",
    approved: "First-in-human, 12-month data 2026", source: D, group: "Next wave (investigational)", status: "Investigational", evidence: "Case series",
    stat: "12 months", statLabel: "islets evaded immune attack with no immunosuppressants (n=1)",
    outcome: "Edited donor islets injected into muscle survived and made insulin with no anti-rejection drugs. Insulin output roughly halved between months 6 and 12; the low dose did not make the patient insulin-free.",
    safety: "No drug-related adverse events; durability unproven.",
    lesson: "The first human evidence that cells can be engineered to avoid rejection.",
    ref: { title: "JDCA: Sana 1-year UP421 results", url: "https://www.thejdca.org/publications/report-library/archived-reports/2026-reports/sana-biotechnologys-1-year-results-in-up421-practical-cure-trial.html" },
  },
  {
    id: "bemdaneprocel", product: "Bemdaneprocel (BlueRock / Bayer)", generic: "embryonic stem cell-derived dopamine neuron progenitors",
    condition: "Parkinson's disease",
    approved: "Nature 2025; 36-month data 2026", source: D, group: "Next wave (investigational)", status: "Investigational", evidence: "Single-arm",
    stat: "Phase 3", statLabel: "sham-controlled exPDite-2 enrolling (~102 patients)",
    outcome: "Grafted neurons were safe with signs of motor benefit sustained to 36 months in the phase 1 trial.",
    safety: "12 months of immunosuppression; RMAT designation.",
    lesson: "Furthest-advanced pluripotent stem cell therapy for the brain in the US.",
    ref: { title: "NeurologyLive: bemdaneprocel 36 months", url: "https://www.neurologylive.com/view/cell-therapy-bemdaneprocel-continues-show-positive-effects-parkinson-disease-36-months" },
    check: true,
  },
  {
    id: "kyoto-pd", product: "Amchepry (Kyoto CiRA / Sumitomo)", generic: "iPS cell-derived dopamine progenitors (raguneprocel)",
    condition: "Parkinson's disease",
    approved: "Nature Apr 2025; Japan conditional approval Mar 6, 2026", source: D, group: "Next wave (investigational)", status: "Investigational", evidence: "Single-arm",
    stat: "+35.7%", statLabel: "motor score improvement ON medication at 24 months",
    outcome: "Seven patients received reprogrammed-stem-cell neurons. Cells survived, produced dopamine and formed no tumors; 5 of 6 improved ON medication.",
    safety: "Not FDA-approved; Japan approval is conditional on very small, uncontrolled data.",
    lesson: "First iPS-cell therapy approved anywhere (conditionally, Japan).",
    ref: { title: "PMLive: Sumitomo limited approval in Japan", url: "https://pmlive.com/pharma_news/sumitomo-pharmas-stem-cell-therapy-for-parkinsons-given-limited-approval-in-japan/" },
  },
  {
    id: "rezanecel", product: "Rezanecel (NRTX-1001, Neurona)", generic: "embryonic stem cell-derived inhibitory interneurons",
    condition: "Drug-resistant temporal lobe epilepsy",
    approved: "AAN 2026 data", source: D, group: "Next wave (investigational)", status: "Investigational", evidence: "Single-arm",
    stat: "89%", statLabel: "median seizure reduction (low-dose group)",
    outcome: "A one-time implant of calming neurons. 7 of 9 low-dose patients halved their seizures at months 7–12.",
    safety: "Company-reported, open-label. RMAT; sham-controlled Phase 3 starting 2H 2026.",
    lesson: "A cell therapy aimed at restoring brain circuits rather than replacing lost cells.",
    ref: { title: "Neurona AAN 2026 update", url: "https://www.biospace.com/press-releases/neurona-presents-updated-data-from-ongoing-clinical-trials-of-rezanecel-nrtx-1001-regenerative-cell-therapy-in-mesial-temporal-lobe-epilepsy-at-2026-american-academy-of-neurology-aan-annual-meeting" },
  },
  {
    id: "car-t-autoimmune", product: "CD19 CAR-T for autoimmune disease (Erlangen)", generic: "autologous CD19 CAR-T",
    condition: "Lupus, myositis, systemic sclerosis",
    approved: "NEJM 2024; long-term series", source: A, group: "Next wave (investigational)", status: "Investigational", evidence: "Case series",
    stat: "15 of 15", statLabel: "off all immunosuppressive drugs",
    outcome: "All 8 lupus patients reached drug-free remission; myositis and systemic sclerosis patients also improved.",
    safety: "Mostly mild cytokine release; industry trials under way.",
    lesson: "Points to an immune 'reset' for autoimmune disease.",
    ref: { title: "CGTLive: CAR-T in autoimmune disease", url: "https://www.cgtlive.com/view/long-term-case-series-supports-car-t-autoimmune-disease" },
  },
  {
    id: "invivo-cart", product: "HN2301 in vivo CAR-T (MagicRNA)", generic: "CAR mRNA in T-cell-targeted lipid nanoparticles",
    condition: "Lupus",
    approved: "First-in-human, 2025", source: A, group: "Next wave (investigational)", status: "Investigational", evidence: "Case series",
    stat: "5", statLabel: "patients with B cells cleared, no cell manufacturing",
    outcome: "CAR-T made inside the body from an infusion, with no cell collection or manufacturing. Lupus activity scores fell by up to 20 points at 3 months.",
    safety: "No severe cytokine release; very early.",
    lesson: "Could make customized cell therapy deliverable outside specialized centers.",
    ref: { title: "MedPath: HN2301 first-in-human", url: "https://trial.medpath.com/news/158efbf4117dac21/magicrna-s-in-vivo-car-t-therapy-hn2301-shows-promise-in-first-in-human-lupus-trial" },
    check: true,
  },
  {
    id: "opregen", product: "OpRegen (Lineage / Roche)", generic: "embryonic stem cell-derived retinal pigment epithelium",
    condition: "Geographic atrophy (dry AMD)",
    approved: "36-month data 2026", source: D, group: "Next wave (investigational)", status: "Investigational", evidence: "Single-arm",
    stat: "+6.2 letters", statLabel: "vision gain at 36 months (10 eyes)",
    outcome: "Subretinal stem-cell-derived support cells; eyes with the most coverage gained 9.0 letters.",
    safety: "Open-label; Phase 2a GAlette enrolling.",
    lesson: "Durable vision gains from a one-time cell transplant.",
    ref: { title: "Retinal Physician: OpRegen", url: "https://retinalphysician.com/news/2026/opregen-shows-signals-in-ga/" },
  },
  {
    id: "hiv-hsct", product: "HIV remission after stem cell transplant", generic: "allogeneic donor stem cells, mostly CCR5Δ32",
    condition: "HIV in people transplanted for blood cancer",
    approved: "Case reports 2009–2026", source: D, group: "Next wave (investigational)", status: "Investigational", evidence: "Case series",
    stat: "~10", statLabel: "people cured or in long-term remission",
    outcome: "Berlin, London, Düsseldorf, City of Hope, New York, Geneva, Oslo and others. The Geneva case had no protective mutation.",
    safety: "Not scalable: transplant is done only for cancer.",
    lesson: "Proof that replacing the immune system with stem cells can cure HIV.",
    ref: { title: "aidsmap: two more people may be cured", url: "https://www.aidsmap.com/news/mar-2025/two-more-people-hiv-may-be-cured-after-stem-cell-transplants" },
  },
];

export const groups: CaseGroup[] = [
  "Gene-corrected stem cells",
  "Blood & immune rebuild",
  "Engineered immune cells",
  "Tissue & organ repair",
  "Next wave (investigational)",
];

export const evidenceLevels: Evidence[] = [
  "Randomized", "Intrapatient control", "Natural-history control", "Single-arm", "Legacy registry data", "Case series",
];
