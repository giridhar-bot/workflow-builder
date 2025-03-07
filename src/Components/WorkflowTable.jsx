import React from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

const WorkflowTable = ({ nodes = [], updateNode }) => {
  if (typeof updateNode !== "function") {
    console.error("❌ Error: updateNode is not a function!"); // Debugging
    return <p style={{ color: "red" }}>Error: updateNode function is missing!</p>;
  }

  const data = Array.isArray(nodes) ? nodes.map((node) => ({ id: node.id, label: node.data.label })) : [];

  const columns = [
    { header: "Node ID", accessorKey: "id" },
    { 
      header: "Label",
      accessorKey: "label",
      cell: ({ row }) => (
        <input 
          type="text"
          defaultValue={row.original.label}
          onBlur={(e) => {
            console.log("🔄 onBlur Triggered:", row.original.id, e.target.value); // Debugging
            updateNode(row.original.id, e.target.value);
          }}
        />
      ),
    },
  ];

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div className="panel">
      <h2>Workflow Table</h2>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkflowTable;
