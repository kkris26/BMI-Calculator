      function BMICalculator() {
        const berat = document.getElementById("input-berat").value;
        const tinggi = document.getElementById("input-tinggi").value;
        const bmiTotal = document.getElementById("bmi");
        const bmiCategory = document.getElementById("category");

        // Rumus BMI
        const bmi = Number(berat) / (Number(tinggi) / 100) ** 2;

        // Menampilkan BMI
        bmiTotal.innerHTML = bmi.toFixed(1);
        bmiCategory;
        if (bmi < 18.5) {
          category = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          category = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
          category = "Overweight";
        } else {
          category = "Obesity";
        }

        // BMI Category
        document.getElementById("category").innerHTML = category;
      }