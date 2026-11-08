document.addEventListener("DOMContentLoaded", function () {
    actualizarDiasRestantes();
    setInterval(actualizarDiasRestantes, 24*60*60*1000); // Actualizar diario
  //Datos para el gráfico de líneas
const dataLine1 = {
  labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'], // Etiquetas de los días
  datasets: [{
    label: 'Km recorridos en Semana 44',
    data: [7, 8, 7, 12], // Datos de los km recorridos en cada día
    borderColor: 'rgba(75, 192, 192, 1)',
    fill: true,
    tension: 0.1
  }]
};

const dataLine2 = {
  labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'], // Etiquetas de los días
  datasets: [{
    label: 'Total Km recorridos en Semana 45',
    data: [5, 4, 4, 33],// Datos de los km recorridos en cada día
    borderColor: 'rgba(45, 78, 199, 1)',
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
  data: dataLine1, // Puede cambiar esto a dataLine2 para mostrar el gráfico de la segunda sección
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
const myChartLine1 = new Chart(document.getElementById('myChart-line-1'), configLine);
const myChartLine2 = new Chart(document.getElementById('myChart-line-2'), {
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

function actualizarDiasRestantes() {
  // Fecha objetivo fija
  const objetivoDate = new Date('2026-11-20');
  const currentDate = new Date();
  const timeDiff = objetivoDate - currentDate;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `<span class="cuenta-regresiva-titulo">CUENTA REGRESIVA</span><br><span class="cuenta-regresiva-numero">${days}d : ${hours}h : ${minutes}m : ${seconds}s</span>`;
}

  // Crear dos nuevas instancias de HTMLVideoElement para cada sección
  let Semana_1_video_1 = document.createElement("video");
  let Semana_1_video_2 = document.createElement("video");
  let Semana_2_video_3 = document.createElement("video");
  let Semana_2_video_4 = document.createElement("video");

});
