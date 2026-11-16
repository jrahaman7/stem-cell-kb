// Successful cases in stem cell and cell therapy, compiled Nov 16, 2026.
// Figures come from FDA announcements and the publications cited on each case.
// They describe trial populations, not guaranteed results for any one patient.
// Check each product's current label and FDA page before relying on a figure.

export type CaseGroup =
  | "Blood & immune rebuild"
  | "Gene-corrected stem cells"
  | "Engineered immune cells"
  | "Tissue & organ repair"
  | "Next wave (investigational)";

export type Status = "FDA-approved" | "Investigational";

export type SuccessCase = {
  id: string;
  product: string;
  generic: string;
  condition: string;
  approved: string; // approval date, or trial readout for investigational work
  source: "Autologous (patient's own cells)" | "Allogeneic (donor cells)";
  group: CaseGroup;
  status: Status;
  stat: string; // headline number
  statLabel: string;
  outcome: string;
  lesson: string; // why it matters for customized therapy
  ref: { title: string; url: string };
};

export const cases: SuccessCase[] = [
  {
    id: "casgevy",
    product: "CASGEVY",
    generic: "exagamglogene autotemcel",
    condition: "Severe sickle cell disease (age 12+)",
    approved: "Dec 8, 2023",
    source: "Autologous (patient's own cells)",
    group: "Gene-corrected stem cells",
    status: "FDA-approved",
    stat: "29 of 31",
    statLabel: "free of severe pain crises for 12+ months",
    outcome:
      "The patient's own blood stem cells are edited with CRISPR/Cas9 to switch fetal hemoglobin back on, then returned in a one-time infusion. 29 of 31 evaluable patients (93.5%) had no severe vaso-occlusive crises for at least 12 straight months.",
    lesson: "First CRISPR medicine approved in the US. Proves a fully personalized, edited stem cell product can clear FDA review.",
    ref: { title: "ASGCT: US-first gene therapies for sickle cell approved", url: "https://asgct.org/publications/news/december-2023/fda-approves-u-s-first-crispr-edited-gene-therapy" },
  },
  {
    id: "lyfgenia",
    product: "LYFGENIA",
    generic: "lovotibeglogene autotemcel",
    condition: "Sickle cell disease with a history of vaso-occlusive events (age 12+)",
    approved: "Dec 8, 2023",
    source: "Autologous (patient's own cells)",
    group: "Gene-corrected stem cells",
    status: "FDA-approved",
    stat: "88%",
    statLabel: "complete resolution of vaso-occlusive events, months 6–18",
    outcome:
      "A lentiviral vector adds a working beta-globin gene to the patient's own stem cells. 28 of 32 patients (88%) had complete resolution of vaso-occlusive events between 6 and 18 months after infusion.",
    lesson: "Approved the same day as CASGEVY, giving two distinct engineering routes (editing vs gene addition) for one disease.",
    ref: { title: "Pharmaceutical Commerce: Lyfgenia and Casgevy approved", url: "https://www.pharmaceuticalcommerce.com/view/lyfgenia-casgevy-become-first-cell-based-gene-therapies-to-gain-fda-approval-for-sickle-cell-disease" },
  },
  {
    id: "zynteglo",
    product: "ZYNTEGLO",
    generic: "betibeglogene autotemcel",
    condition: "Transfusion-dependent beta-thalassemia (adults and children)",
    approved: "Aug 17, 2022",
    source: "Autologous (patient's own cells)",
    group: "Gene-corrected stem cells",
    status: "FDA-approved",
    stat: "89%",
    statLabel: "of 41 patients became transfusion independent",
    outcome:
      "Patients who needed regular blood transfusions for life received a single dose of their own gene-modified stem cells. 89% of 41 patients reached transfusion independence (no transfusions for at least 12 months with stable hemoglobin).",
    lesson: "First cell-based gene therapy for beta-thalassemia; each dose is made from one patient's own marrow.",
    ref: { title: "AABB: FDA approves first gene therapy for TDT", url: "https://aabb.org/news-resources/news/article/2022/08/24/fda-approves-first-gene-therapy-for-transfusion-dependent-beta-thalassemia" },
  },
  {
    id: "lenmeldy",
    product: "LENMELDY",
    generic: "atidarsagene autotemcel",
    condition: "Metachromatic leukodystrophy (MLD) in children",
    approved: "Mar 18, 2024",
    source: "Autologous (patient's own cells)",
    group: "Gene-corrected stem cells",
    status: "FDA-approved",
    stat: "100% vs 58%",
    statLabel: "alive at age 6, treated vs untreated (presymptomatic late infantile)",
    outcome:
      "The child's stem cells are given a working ARSA gene. In 37 treated children, the risk of severe motor impairment or death fell sharply; every presymptomatic late-infantile child treated was alive at age 6, versus 58% of untreated children.",
    lesson: "Shows the value of newborn and early screening: the therapy works when given before symptoms take hold.",
    ref: { title: "FDA: first gene therapy for children with MLD", url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapy-children-metachromatic-leukodystrophy" },
  },
  {
    id: "ryoncil",
    product: "RYONCIL",
    generic: "remestemcel-L-rknd",
    condition: "Steroid-refractory acute graft-versus-host disease in children",
    approved: "Dec 18, 2024",
    source: "Allogeneic (donor cells)",
    group: "Blood & immune rebuild",
    status: "FDA-approved",
    stat: "70%",
    statLabel: "overall response at day 28 (38 of 54 children)",
    outcome:
      "Donor bone-marrow mesenchymal stromal cells were given to 54 children whose GVHD did not respond to steroids. 70% responded by day 28, including 30% complete responses.",
    lesson: "First FDA-approved MSC therapy. The path took several review cycles, a useful lesson on evidence standards for MSC products.",
    ref: { title: "FDA: remestemcel-L-rknd approval", url: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-remestemcel-l-rknd-steroid-refractory-acute-graft-versus-host-disease-pediatric" },
  },
  {
    id: "omisirge",
    product: "OMISIRGE",
    generic: "omidubicel-onlv",
    condition: "Blood cancers needing cord blood transplant (age 12+)",
    approved: "Apr 17, 2023",
    source: "Allogeneic (donor cells)",
    group: "Blood & immune rebuild",
    status: "FDA-approved",
    stat: "12 vs 22 days",
    statLabel: "median time to neutrophil recovery vs standard cord blood",
    outcome:
      "Cord blood stem cells are expanded with nicotinamide before transplant. In a randomized trial of 125 patients, white cells recovered in a median 12 days versus 22, and serious infections by day 100 fell from 60% to 39%.",
    lesson: "Expanded cord blood widens donor options for patients who lack a matched adult donor.",
    ref: { title: "FDA: omidubicel approval", url: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-omidubicel-reduce-time-neutrophil-recovery-and-infection-patients-hematologic" },
  },
  {
    id: "rethymic",
    product: "RETHYMIC",
    generic: "allogeneic processed thymus tissue-agdc",
    condition: "Congenital athymia in children",
    approved: "Oct 8, 2021",
    source: "Allogeneic (donor cells)",
    group: "Blood & immune rebuild",
    status: "FDA-approved",
    stat: "77%",
    statLabel: "survival at 1 year; 94% long-term for 1-year survivors",
    outcome:
      "Children born without a thymus usually die by age 2 or 3. In studies of 105 patients, implanted donor thymus tissue gave 77% survival at one year and 76% at two years, and 94% of one-year survivors were alive at a median 10.7 years.",
    lesson: "Each dose is sized to the child's body surface area, an early model of patient-customized tissue dosing.",
    ref: { title: "Medthority: Rethymic approval data", url: "https://www.medthority.com/news/2021/10/fda-approves-rethymic--for-pediatric-congenital-athymia.--enzyvant" },
  },
  {
    id: "kymriah",
    product: "KYMRIAH",
    generic: "tisagenlecleucel",
    condition: "Relapsed or refractory B-cell ALL (up to age 25)",
    approved: "Aug 30, 2017",
    source: "Autologous (patient's own cells)",
    group: "Engineered immune cells",
    status: "FDA-approved",
    stat: "83%",
    statLabel: "remission within 3 months (63 patients)",
    outcome:
      "The patient's own T cells are engineered with a CD19 CAR. In the ELIANA trial, 83% of 63 children and young adults went into remission within three months.",
    lesson: "First CAR-T and first gene therapy approved in the US; it set the certified-center (REMS) model now used for personalized cell products.",
    ref: { title: "AACR: FDA approves first CAR T-cell therapy", url: "https://www.aacr.org/blog/2017/08/31/fda-approves-first-car-t-cell-therapy/" },
  },
  {
    id: "lantidra",
    product: "LANTIDRA",
    generic: "donislecel",
    condition: "Type 1 diabetes with repeated severe hypoglycemia (adults)",
    approved: "Jun 28, 2023",
    source: "Allogeneic (donor cells)",
    group: "Tissue & organ repair",
    status: "FDA-approved",
    stat: "21 of 30",
    statLabel: "insulin-free for a year or more",
    outcome:
      "Donor pancreatic islet cells are infused into the liver's portal vein. 21 of 30 participants needed no insulin for at least a year, and 10 stayed insulin-free for more than five years; 5 had no insulin-free days.",
    lesson: "First cell therapy approved for type 1 diabetes, and the regulatory precedent for stem-cell-derived islets.",
    ref: { title: "BioSpace: FDA approves first cell therapy for T1D", url: "https://www.biospace.com/article/fda-approves-first-cell-therapy-for-type-1-diabetes-/" },
  },
  {
    id: "zevaskyn",
    product: "ZEVASKYN",
    generic: "prademagene zamikeracel",
    condition: "Wounds in recessive dystrophic epidermolysis bullosa (RDEB)",
    approved: "Apr 2025",
    source: "Autologous (patient's own cells)",
    group: "Tissue & organ repair",
    status: "FDA-approved",
    stat: "81% vs 16%",
    statLabel: "of wounds 50%+ healed at 6 months, treated vs control",
    outcome:
      "The patient's own skin cells are gene-corrected to make type VII collagen and grafted as sheets. In the phase 3 VIITAL study, 81% of 43 large chronic wounds healed by half or more at six months, versus 16% of matched control wounds.",
    lesson: "A one-time, patient-specific surgical cell product with durable healing seen up to 8 years in earlier study.",
    ref: { title: "PMLiVE: FDA approves Zevaskyn", url: "https://pmlive.com/?p=271619" },
  },
  {
    id: "zimislecel",
    product: "Zimislecel (VX-880)",
    generic: "stem cell-derived, fully differentiated islets",
    condition: "Type 1 diabetes with severe hypoglycemia",
    approved: "NEJM, 2025 (phase 1/2)",
    source: "Allogeneic (donor cells)",
    group: "Next wave (investigational)",
    status: "Investigational",
    stat: "10 of 12",
    statLabel: "insulin-independent at one year (full dose)",
    outcome:
      "Islets grown from pluripotent stem cells were infused in people with no insulin production of their own. All 12 full-dose participants reached target blood sugar and 10 of 12 needed no insulin at one year. Immunosuppression is still required.",
    lesson: "Unlimited, manufactured islet supply could move islet therapy beyond the donor-pancreas bottleneck.",
    ref: { title: "NEJM: Stem cell-derived, fully differentiated islets for T1D", url: "https://www.ovid.com/journals/nejm/abstract/10.1056/nejmoa2506549~stem-cell-derived-fully-differentiated-islets-for-type-1" },
  },
  {
    id: "kyoto-pd",
    product: "iPS-cell dopaminergic progenitors (Kyoto)",
    generic: "allogeneic iPS cell-derived dopaminergic progenitors",
    condition: "Parkinson's disease",
    approved: "Nature, Apr 2025 (phase 1/2)",
    source: "Allogeneic (donor cells)",
    group: "Next wave (investigational)",
    status: "Investigational",
    stat: "+44.7%",
    statLabel: "rise in dopamine uptake signal in the putamen",
    outcome:
      "Seven patients aged 50–69 received bilateral implants. The grafted cells survived, produced dopamine and formed no tumors over 24 months; brain imaging showed dopamine uptake rose 44.7%, more in the high-dose group.",
    lesson: "First strong human safety signal for reprogrammed (iPS) cells in the brain, a key step toward off-the-shelf neural repair.",
    ref: { title: "Nature: Phase I/II trial of iPS-cell-derived dopaminergic cells", url: "https://www.cira.kyoto-u.ac.jp/e/research/finding/250417-000000.html" },
  },
];

export const groups: CaseGroup[] = [
  "Gene-corrected stem cells",
  "Blood & immune rebuild",
  "Engineered immune cells",
  "Tissue & organ repair",
  "Next wave (investigational)",
];
