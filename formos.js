document.addEventListener("DOMContentLoaded", function () {
    const titleSelect = document.getElementById("title");

    titleSelect.addEventListener("change", function () {
        const selectedValue = titleSelect.value;

        // Example: log selected title
        console.log("Pasirinktas titulas:", selectedValue);

        // Optional: show a message
        if (selectedValue === "mr") {
            show("Pasirinkote titulą: Mr");
        } else if (selectedValue === "mrs") {
            show("Pasirinkote titulą: Mrs");
        } else if (selectedValue === "miss") {
            show("Pasirinkote titulą: Miss");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("numSelect");
  const container = document.getElementById("inputSalys");

  select.addEventListener("change", function () {
      container.innerHTML = ""; // Clear previous fields
      const count = parseInt(select.value);

      for (let i = 1; i <= count; i++) {
          const input = document.createElement("input");
          input.type = "text";
          input.placeholder = `Šalis ${i}`;
          input.required = true; // Makes it required
          input.style.width = "200px";
          input.style.padding = "5px";
          input.style.border = "1px solid #ccc";
          input.style.borderRadius = "5px";
          input.style.marginTop = "-20px";

          container.appendChild(input);
          container.appendChild(document.createElement("br"));
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('input[name="choice"]');
    const workOptions = document.getElementById('work-options');
    const unemployedOptions = document.getElementById('unemployed-options');

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'employed' || radio.value === 'self') {
                workOptions.style.display = "block";
                unemployedOptions.style.display = "none";
            } else if (radio.value === 'unemployed') {
                workOptions.style.display = "none";
                unemployedOptions.style.display = "block";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    console.log("JS loaded");

    const marriedYes = document.getElementById("marriedYes");
    const marriedNo = document.getElementById("marriedNo");
    const marriageDateSection = document.getElementById("marriageDateSection");

    marriedYes.addEventListener("change", function () {
      console.log("Taip selected");
      if (this.checked) {
        marriageDateSection.classList.remove("hidden");
      }
    });

    marriedNo.addEventListener("change", function () {
      console.log("Ne selected");
      if (this.checked) {
        marriageDateSection.classList.add("hidden");
      }
    });

    // Initial visibility
    if (marriedYes.checked) {
      marriageDateSection.classList.remove("hidden");
    } else {
      marriageDateSection.classList.add("hidden");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const marriedYes = document.getElementById("marriedYes");
    const marriedNo = document.getElementById("marriedNo");
    const marriageDateSection = document.getElementById("marriageDateSection");
    const divorceQuestionSection = document.getElementById("divorceQuestionSection");
    const spouseInfoSection = document.getElementById("spouseInfoSection");
  
    const divorceYes = document.getElementById("divorceYes");
    const divorceNo = document.getElementById("divorceNo");
    const extraQuestions = document.getElementById("extraQuestions");
  
    // Marriage: YES
    marriedYes.addEventListener("change", function () {
      if (this.checked) {
        marriageDateSection.classList.remove("hidden");
        divorceQuestionSection.classList.remove("hidden2");
        spouseInfoSection.classList.remove("hidden");
      }
    });
  
    // Marriage: NO
    marriedNo.addEventListener("change", function () {
      if (this.checked) {
        marriageDateSection.classList.add("hidden");
        divorceQuestionSection.classList.add("hidden2");
        spouseInfoSection.classList.add("hidden");
        extraQuestions.classList.add("hidden2"); // hide divorce follow-up too
      }
    });
  
    // Divorce: YES
    divorceYes.addEventListener("change", function () {
      if (this.checked) {
        extraQuestions.classList.remove("hidden2");
      }
    });
  
    // Divorce: NO
    divorceNo.addEventListener("change", function () {
      if (this.checked) {
        extraQuestions.classList.add("hidden2");
      }
    });
  
    // Initial state on page load
    if (marriedYes.checked) {
      marriageDateSection.classList.remove("hidden");
      divorceQuestionSection.classList.remove("hidden2");
      spouseInfoSection.classList.remove("hidden");
    } else {
      marriageDateSection.classList.add("hidden");
      divorceQuestionSection.classList.add("hidden2");
      spouseInfoSection.classList.add("hidden");
      extraQuestions.classList.add("hidden2");
    }
  
    if (divorceYes && divorceYes.checked) {
      extraQuestions.classList.remove("hidden2");
    } else {
      extraQuestions.classList.add("hidden2");
    }
  });


document.addEventListener("DOMContentLoaded", function () {
    const numChildrenInput = document.getElementById("numChildren");
    const childrenContainer = document.getElementById("childrenContainer");

    numChildrenInput.addEventListener("input", function () {
      const count = parseInt(this.value) || 0;
      childrenContainer.innerHTML = "";

      for (let i = 1; i <= count; i++) {
        const div = document.createElement("div");
        div.className = "child-input";
        div.innerHTML = `
          <p1 style="margin-left: 10px; font-size: 25px;">${i} : </p1><br>
          <label id="vaiko-vardas" > Vardas:</label><br>
          <input type="text" id="vaiko-vardas" class="label-input" name="childName${i}" placeholder="Vardas" required /><br><br>

          <label id="vaiko-vardas"; > Pavardė:</label><br>
          <input type="text" id="vaiko-vardas" class="label-input" name="childName${i}" placeholder="Pavardė" required /><br><br>

          <label id="vaiko-vardas"; > Amžius:</label><br>
          <input type="text" id="vaiko-vardas" class="label-input" name="childName${i}" placeholder="Amžius" required /><br><br>
        `;
        childrenContainer.appendChild(div);
      }
      })
    });