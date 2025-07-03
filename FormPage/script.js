// Form Validation Script
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const submitBtn = form.querySelector('button[type="submit"]');
  const modal = document.getElementById("successModal");
  const modalCloseButtons = modal.querySelectorAll(".modal-close");

  // Validation Rules
  const validationRules = {
    fullName: {
      required: true,
      minLength: 3,
      pattern: /^[a-zA-Z\s]+$/,
      message: "Nama harus minimal 3 karakter dan hanya mengandung huruf",
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Format email tidak valid",
    },
    phone: {
      required: true,
      pattern: /^(\+62|62|0)8[1-9][0-9-]{7,15}$/,
      message: "Format nomor telepon tidak valid (contoh: 08123456789)",
    },
    birthDate: {
      required: true,
      validate: function (value) {
        const date = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        return age >= 17 && age <= 100;
      },
      message: "Usia harus minimal 17 tahun",
    },
    gender: {
      required: true,
      message: "Silakan pilih jenis kelamin",
    },
    address: {
      required: true,
      minLength: 10,
      message: "Alamat harus minimal 10 karakter",
    },
    city: {
      required: true,
      minLength: 3,
      pattern: /^[a-zA-Z\s]+$/,
      message: "Nama kota harus minimal 3 karakter dan hanya mengandung huruf",
    },
    province: {
      required: true,
      message: "Silakan pilih provinsi",
    },
    postalCode: {
      required: true,
      pattern: /^[0-9]{5}$/,
      message: "Kode pos harus 5 digit angka",
    },
    username: {
      required: true,
      minLength: 4,
      pattern: /^[a-zA-Z0-9_]+$/,
      message:
        "Username minimal 4 karakter dan hanya boleh mengandung huruf, angka, dan underscore",
    },
    password: {
      required: true,
      minLength: 8,
      validate: function (value) {
        return (
          /[A-Z]/.test(value) &&
          /[a-z]/.test(value) &&
          /[0-9]/.test(value) &&
          /[!@#$%^&*]/.test(value)
        );
      },
      message:
        "Password harus minimal 8 karakter dengan kombinasi huruf besar, huruf kecil, angka, dan karakter khusus",
    },
    confirmPassword: {
      required: true,
      validate: function (value) {
        return value === document.getElementById("password").value;
      },
      message: "Password tidak cocok",
    },
    terms: {
      required: true,
      message: "Anda harus menyetujui syarat dan ketentuan",
    },
  };

  // Real-time validation
  form.addEventListener("input", function (e) {
    if (
      e.target.tagName === "INPUT" ||
      e.target.tagName === "TEXTAREA" ||
      e.target.tagName === "SELECT"
    ) {
      validateField(e.target);
    }
  });

  // Password strength indicator
  const passwordInput = document.getElementById("password");
  const strengthBar = document.querySelector(".strength-bar");

  passwordInput.addEventListener("input", function () {
    const strength = checkPasswordStrength(this.value);
    updatePasswordStrength(strength);
  });

  // Toggle password visibility
  const toggleButtons = document.querySelectorAll(".toggle-password");
  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const input = document.getElementById(targetId);
      const type =
        input.getAttribute("type") === "password" ? "text" : "password";
      input.setAttribute("type", type);

      // Change icon
      const icon = this.querySelector(".eye-icon");
      icon.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
    });
  });

  // Form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
      // Show loading state
      submitBtn.disabled = true;
      submitBtn.classList.add("loading");
      submitBtn.textContent = "Memproses...";

      // Simulate API call
      setTimeout(() => {
        // Collect form data
        const formData = collectFormData();

        // Display success modal
        showSuccessModal(formData);

        // Reset form
        form.reset();
        resetValidation();

        // Reset button state
        submitBtn.disabled = false;
        submitBtn.classList.remove("loading");
        submitBtn.textContent = "Daftar Sekarang";
      }, 1500);
    }
  });

  // Reset button functionality
  form.addEventListener("reset", function () {
    resetValidation();
    updatePasswordStrength("");
  });

  // Validation Functions
  function validateField(field) {
    const fieldName = field.name;
    const rule = validationRules[fieldName];

    if (!rule) return true;

    const value =
      field.type === "checkbox" ? field.checked : field.value.trim();
    const formGroup = field.closest(".form-group");
    const errorMessage = formGroup.querySelector(".error-message");

    let isValid = true;
    let message = "";

    // Check required
    if (rule.required && !value) {
      isValid = false;
      message = `${getFieldLabel(field)} wajib diisi`;
    }

    // Check minLength
    else if (rule.minLength && value.length < rule.minLength) {
      isValid = false;
      message = rule.message;
    }

    // Check pattern
    else if (rule.pattern && !rule.pattern.test(value)) {
      isValid = false;
      message = rule.message;
    }

    // Custom validation
    else if (rule.validate && !rule.validate(value)) {
      isValid = false;
      message = rule.message;
    }

    // Update UI
    if (isValid) {
      formGroup.classList.remove("error");
      errorMessage.textContent = "";
      errorMessage.classList.remove("show");
    } else {
      formGroup.classList.add("error");
      errorMessage.textContent = message;
      errorMessage.classList.add("show");
    }

    return isValid;
  }

  function validateForm() {
    let isValid = true;

    // Validate all fields
    Object.keys(validationRules).forEach((fieldName) => {
      const field = form.elements[fieldName];
      if (field && !validateField(field)) {
        isValid = false;
      }
    });

    // Scroll to first error
    if (!isValid) {
      const firstError = form.querySelector(".form-group.error");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    return isValid;
  }

  function resetValidation() {
    const formGroups = form.querySelectorAll(".form-group");
    formGroups.forEach((group) => {
      group.classList.remove("error");
      const errorMessage = group.querySelector(".error-message");
      if (errorMessage) {
        errorMessage.textContent = "";
        errorMessage.classList.remove("show");
      }
    });
  }

  // Password Strength Functions
  function checkPasswordStrength(password) {
    if (!password) return "";

    let strength = 0;

    // Length check
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;

    // Character variety
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;

    if (strength <= 2) return "weak";
    if (strength <= 4) return "medium";
    return "strong";
  }

  function updatePasswordStrength(strength) {
    strengthBar.className = "strength-bar";
    if (strength) {
      strengthBar.classList.add(strength);
    }
  }

  // Helper Functions
  function getFieldLabel(field) {
    const label = field.closest(".form-group").querySelector("label");
    return label ? label.textContent.replace("*", "").trim() : field.name;
  }

  function collectFormData() {
    const formData = new FormData(form);
    const data = {};

    // Regular fields
    for (let [key, value] of formData.entries()) {
      if (data[key]) {
        // Handle multiple values (checkboxes)
        if (!Array.isArray(data[key])) {
          data[key] = [data[key]];
        }
        data[key].push(value);
      } else {
        data[key] = value;
      }
    }

    // Format date
    if (data.birthDate) {
      const date = new Date(data.birthDate);
      data.birthDate = date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }

    // Remove password from display
    delete data.password;
    delete data.confirmPassword;

    return data;
  }

  // Modal Functions
  function showSuccessModal(data) {
    const submittedDataDiv = document.getElementById("submittedData");

    // Create data display
    let html = "<h4>Data yang telah dikirim:</h4>";

    const fieldLabels = {
      fullName: "Nama Lengkap",
      email: "Email",
      phone: "Nomor Telepon",
      birthDate: "Tanggal Lahir",
      gender: "Jenis Kelamin",
      address: "Alamat",
      city: "Kota",
      province: "Provinsi",
      postalCode: "Kode Pos",
      username: "Username",
      interests: "Minat",
      newsletter: "Newsletter",
      terms: "Persetujuan",
    };

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        const label = fieldLabels[key] || key;
        let displayValue = value;

        // Format specific values
        if (key === "gender") {
          displayValue = value === "male" ? "Laki-laki" : "Perempuan";
        } else if (key === "newsletter") {
          displayValue = value === "yes" ? "Ya" : "Tidak";
        } else if (key === "terms") {
          displayValue = "Disetujui";
        } else if (Array.isArray(value)) {
          displayValue = value.join(", ");
        }

        html += `<p><strong>${label}:</strong> ${displayValue}</p>`;
      }
    });

    submittedDataDiv.innerHTML = html;
    modal.classList.add("show");
  }

  // Close modal
  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      modal.classList.remove("show");
    });
  });

  // Close modal on outside click
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });

  // Auto-format phone number
  document.getElementById("phone").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");

    // Add formatting
    if (value.length > 4 && value.length <= 8) {
      value = value.slice(0, 4) + "-" + value.slice(4);
    } else if (value.length > 8) {
      value =
        value.slice(0, 4) + "-" + value.slice(4, 8) + "-" + value.slice(8, 12);
    }

    e.target.value = value;
  });

  // Prevent form submission on Enter in specific fields
  form.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();

      // Move to next field
      const fields = Array.from(form.elements).filter(
        (field) =>
          field.type !== "submit" && field.type !== "reset" && !field.disabled
      );
      const currentIndex = fields.indexOf(e.target);

      if (currentIndex > -1 && currentIndex < fields.length - 1) {
        fields[currentIndex + 1].focus();
      }
    }
  });
});
