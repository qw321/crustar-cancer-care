/*
 * CRUSTAR Cancer Care
 * Main JavaScript
 */

/* =========================================
   RISK CHECK
   Educational navigation tool only
   Does NOT diagnose cancer
   ========================================= */

function openRiskCheck() {
  const panel = document.getElementById("riskCheckPanel");

  if (!panel) return;

  panel.hidden = false;

  panel.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


function closeRiskCheck() {
  const panel = document.getElementById("riskCheckPanel");

  if (!panel) return;

  panel.hidden = true;

  const result = document.getElementById("riskResult");

  if (result) {
    result.innerHTML = "";
  }
}


function runRiskCheck() {

  const symptoms =
    document.getElementById("riskSymptoms")?.checked;

  const screening =
    document.getElementById("riskScreening")?.checked;

  const history =
    document.getElementById("riskHistory")?.checked;

  const diagnosed =
    document.getElementById("riskDiagnosed")?.checked;

  const emergency =
    document.getElementById("riskEmergency")?.checked;

  const result =
    document.getElementById("riskResult");

  if (!result) return;


  /* -----------------------------------------
     EMERGENCY
     ----------------------------------------- */

  if (emergency) {

    result.innerHTML = `
      <div class="risk-result-box">

        <h4>🚨 Seek urgent medical help now</h4>

        <p>
          If you are experiencing severe or life-threatening symptoms,
          seek emergency medical care now rather than relying on this tool.
        </p>

        <p>
          Contact your local emergency service or go to the nearest
          emergency department.
        </p>

      </div>
    `;

    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    return;
  }


  /* -----------------------------------------
     ALREADY DIAGNOSED
     ----------------------------------------- */

  if (diagnosed) {

    result.innerHTML = `
      <div class="risk-result-box">

        <h4>🧭 Focus on your care journey</h4>

        <p>
          If you have already received a cancer diagnosis,
          this Risk Check is not the right tool for assessing
          your condition.
        </p>

        <p>
          Your treating healthcare team should guide your
          diagnosis, treatment and follow-up care.
        </p>

        <a href="#patient-journey" class="btn btn-secondary">
          Explore Patient Journey →
        </a>

      </div>
    `;

    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    return;
  }


  /* -----------------------------------------
     SYMPTOMS
     ----------------------------------------- */

  if (symptoms) {

    result.innerHTML = `
      <div class="risk-result-box">

        <h4>🩺 Consider a medical evaluation</h4>

        <p>
          New, persistent, unexplained or worsening symptoms
          should be discussed with a qualified healthcare professional.
        </p>

        <p>
          This does not mean that you have cancer. Many symptoms
          can be caused by conditions other than cancer.
        </p>

        <p>
          If symptoms continue, worsen or concern you, arrange an
          appropriate medical evaluation rather than waiting for
          an online tool to determine the cause.
        </p>

        <a href="#find-support" class="btn btn-secondary">
          Find Support →
        </a>

      </div>
    `;

    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    return;
  }


  /* -----------------------------------------
     SCREENING / FAMILY HISTORY
     ----------------------------------------- */

  if (screening || history) {

    result.innerHTML = `
      <div class="risk-result-box">

        <h4>📋 Discuss screening with a healthcare professional</h4>

        <p>
          Cancer screening recommendations depend on factors such
          as age, personal history, family history, risk factors
          and the type of cancer being considered.
        </p>

        <p>
          A healthcare professional can help determine which
          screening, if any, may be appropriate for you and when
          it should be done.
        </p>

        <a href="#cancer-care" class="btn btn-secondary">
          Explore Cancer Care →
        </a>

      </div>
    `;

    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    return;
  }


  /* -----------------------------------------
     NOTHING SELECTED
     ----------------------------------------- */

  result.innerHTML = `
    <div class="risk-result-box">

      <h4>ℹ️ Select an option to continue</h4>

      <p>
        Please select at least one statement above so
        CRUSTAR CARE can show you the most relevant
        general next step.
      </p>

    </div>
  `;

  result.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}


/* -----------------------------------------
   PAGE INITIALIZATION
   ----------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {

  console.log("CRUSTAR Cancer Care loaded successfully.");

});
