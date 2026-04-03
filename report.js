function generateReport(){

const {jsPDF} = window.jspdf

let doc = new jsPDF()

doc.text("Biomedical Health Analytics Report",20,20)

doc.text("Total Patients: "+patients.length,20,40)

doc.text("System Analysis:",20,60)

doc.text("Patients with oxygen <94% show high COVID risk.",20,80)

doc.text("High temperature correlates with infection risk.",20,100)

doc.save("Biomedical_Report.pdf")

}