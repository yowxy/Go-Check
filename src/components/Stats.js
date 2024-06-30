function Stats({ items }){

    if (items.length === 0){
      return(
        <footer className="stats">
          <span>Kamu  harus mengisi data dulu yaa</span>
        </footer>
      )
    }
  
    // buat menampilkan angka sebuah data yang udah kita tambahkan 
    const totalItems = items.length;
    //  buat hasil  data yang udah din ceklis 
    const doneItems = items.filter((item) => item.done).length;
    // buat menentukan hasil yang di ceklis berapa persen dari data yang ada
    const percentage = Math.round(( doneItems / totalItems )* 100);
    return(
      <footer className="stats">
          <span>
  
          {percentage === 100
            ? "Kamu sudah Cheklist semua nya 📗✅"
            : `   kamu punya ${totalItems} catatan yang udah kamu catat , dan baru ${doneItems} yang udah di checklist ${percentage}% `
          }
          </span>
      </footer>
    )
  }


  export default Stats;