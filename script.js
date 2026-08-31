document.addEventListener("DOMContentLoaded", function () {
    //actualizarDiasRestantes();
    //setInterval(actualizarDiasRestantes, 24*60*60*1000); // Actualizar diario

  // Datos para el gráfico de líneas
  const dataLine1 = {
    labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5'],
    datasets: [{
      label: 'Total Km recorridos en Semana 34',
      data: [8, 10, 6, 12, 13],
      borderColor: 'rgba(45, 78, 199, 1)',
      backgroundColor: 'rgba(45, 78, 199, 0.15)',
      fill: true,
      tension: 0.1
    }]
  };

  const dataLine2 = {
    labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5'],
    datasets: [{
      label: 'Total Km recorridos en Semana 35',
      data: [12, 12, 16, 15, 23],
      borderColor: 'rgba(45, 78, 199, 1)',
      backgroundColor: 'rgba(45, 78, 199, 0.15)',
      fill: true,
      tension: 0.1
    }]
  };

  const chartFont = {
    family: 'Tajawal, Arial, sans-serif',
    size: 12,
    weight: '500'
  };

  // Configuración del gráfico de líneas
  const configLine = {
    type: 'line',
    data: dataLine1,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#374151',
            font: chartFont
          }
        },
        tooltip: {
          titleFont: chartFont,
          bodyFont: chartFont,
          footerFont: chartFont
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#4b5563',
            font: chartFont
          },
          grid: {
            color: 'rgba(15, 23, 42, 0.08)'
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: '#4b5563',
            font: chartFont
          },
          grid: {
            color: 'rgba(15, 23, 42, 0.08)'
          }
        }
      }
    }
  };

  // Seleccione los contextos de los <canvas> y cree los gráficos
  const chartCanvas1 = document.getElementById('myChart-line-1');
  const chartCanvas2 = document.getElementById('myChart-line-2');

  if (chartCanvas1) {
    new Chart(chartCanvas1, configLine);
  }

  if (chartCanvas2) {
    new Chart(chartCanvas2, {
      type: 'line',
      data: dataLine2,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#374151',
              font: chartFont
            }
          },
          tooltip: {
            titleFont: chartFont,
            bodyFont: chartFont,
            footerFont: chartFont
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#4b5563',
              font: chartFont
            },
            grid: {
              color: 'rgba(15, 23, 42, 0.08)'
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: '#4b5563',
              font: chartFont
            },
            grid: {
              color: 'rgba(15, 23, 42, 0.08)'
            }
          }
        }
      }
    });
  }

function actualizarDiasRestantes() {
  // Fecha objetivo fija
  const objetivoDate = new Date('2026-07-09');
  const currentDate = new Date();
  const timeDiff = objetivoDate - currentDate;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `<span class="cuenta-regresiva-titulo">CUENTA REGRESIVA</span><br><span class="cuenta-regresiva-numero">${days}d : ${hours}h : ${minutes}m : ${seconds}s</span>`;
}

});
