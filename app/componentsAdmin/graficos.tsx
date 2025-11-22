import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";

// Dados de exemplo para tags 
export function getTagsData() {
  return [
    { tag: "Orgânico", quantidade: 45 },
    { tag: "Vegano", quantidade: 32 },
    { tag: "Sem Glúten", quantidade: 28 },
    { tag: "Sem Lactose", quantidade: 25 },
    { tag: "Natural", quantidade: 38 },
    { tag: "Low Carb", quantidade: 22 },
    { tag: "Sem Açúcar", quantidade: 19 },
  ];
}

// Gráfico de Barras para Tags
export const Chart2 = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    
    data: getTagsData(),
    background: {
      fill: 'transparent'
    },
    series: [
      {
        type: "bar",
        xKey: "tag",
        yKey: "quantidade",
        yName: "Quantidade",
        label: {
          color: "#ffffff",
        },
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        title: {
          text: "Tags",
          color: "#ffffff",
        },
        label: {
          color: "#ffffff",
          rotation: -45, 
        },
      },
      {
        type: "number",
        position: "left",
        title: {
          text: "Quantidade",
          color: "#ffffff",
        },
        label: {
          color: "#ffffff",
        },
      },
    ],
    legend: {
      enabled: false, 
    },
  });

  return <AgCharts options={options} style={{height: '100%'}}/>;
};

export function getData() {
  return [
    { asset: "Hortifruti", amount: 60000 },
    { asset: "Padaria", amount: 40000 },
    { asset: "Laticínios", amount: 7000 },
    { asset: "Carnes", amount: 5000 },
    { asset: "Bebidas", amount: 3000 },
  ];
}

// Gráfico de Pizza para Categorias
export const Chart = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    data: getData(),
    background: {
      fill: 'transparent'
    },
    title: {
      text: "Categorias de Produtos",
      color: "#ffffff",
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        calloutLabelKey: "asset",
        calloutLabel: {
          color: "#ffffff",
        },
        sectorLabelKey: "amount",
        sectorLabel: {
          color: "#ffffff",
          fontWeight: "bold",
          formatter: ({ value }) => `${(value / 1000).toFixed(0)}K`,
        },
      },
    ],
    legend: {
      item: {
        label: {
          color: "#ffffff",
        },
      },
    },
  });

  return <AgCharts options={options} style={{height: '100%'}}/>;
};

// Gráfico de Linha - Crescimento de Usuários
export const Chart3 = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    //integraer com o grafico do AGChart (n faço ideia como) 
    data: [
      { dia: "01/05", usuarios: 80 },
      { dia: "05/05", usuarios: 92 },
      { dia: "10/05", usuarios: 105 },
      { dia: "15/05", usuarios: 98 },
      { dia: "20/05", usuarios: 112 },
      { dia: "25/05", usuarios: 124 },
      { dia: "30/05", usuarios: 135 },
    ],
    background: {
      fill: 'transparent'
    },
    title: {
      text: "Crescimento de Usuários",
      color: "#ffffff",
    },
    series: [
      {
        type: "line",
        xKey: "dia",
        yKey: "usuarios",
        yName: "Usuários",
        stroke: "#10b981",
        marker: {
          fill: "#10b981",
          stroke: "#059669",
        },
        label: {
          color: "#ffffff",
        },
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        title: {
          text: "Data",
          color: "#ffffff",
        },
        label: {
          color: "#ffffff",
        },
      },
      {
        type: "number",
        position: "left",
        title: {
          text: "Usuários",
          color: "#ffffff",
        },
        label: {
          color: "#ffffff",
        },
      },
    ],
  });

  return <AgCharts options={options} style={{height: '100%'}}/>;
};

export const Chart4 = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    data: [
      { tipo: "Orgânicas", quantidade: 8 },
      { tipo: "Agroecológicas", quantidade: 5 },
      { tipo: "Artesanato", quantidade: 12 },
      { tipo: "Tradicionais", quantidade: 15 },
      { tipo: "Especiais", quantidade: 3 },
    ],
    background: {
      fill: 'transparent'
    },
    title: {
      text: "Distribuição por Tipo",
      color: "#ffffff",
    },
    series: [
      {
        type: "donut",
        angleKey: "quantidade",
        calloutLabelKey: "tipo",
        sectorLabelKey: "quantidade",
        sectorLabel: {
          color: "#ffffff",
          fontWeight: "bold",
        },
        calloutLabel: {
          color: "#ffffff",
        },
      },
    ],
    legend: {
      item: {
        label: {
          color: "#ffffff",
        },
      },
    },
  });

  return <AgCharts options={options} style={{height: '100%'}}/>;
};