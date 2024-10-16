<script setup>
import VueApexCharts from "vue3-apexcharts";
const series = [44, 55, 41, 17];
const chartOptions = {
  chart: {
    type: "donut",
  },
  labels: ["Paracetamol", "Vitamin tablet", "Antacid Tablets", "Others"],
  colors: [],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: "100%",
          height: 250,
        },
        legend: {
          position: "bottom",
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          width: "100%",
        },
        legend: {
          position: "bottom",
        },
      },
    },
    {
      breakpoint: 968,
      options: {
        chart: {
          width: "100%",
          height: 250,
        },
        legend: {
          position: "bottom",
        },
      },
    },
    {
      breakpoint: 1440,
      options: {
        chart: {
          width: "100%",
          height: 250,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
</script>

<template>
  <div>
    <VueApexCharts ref="donut" :options="chartOptions" :series="series" />
  </div>
</template>
