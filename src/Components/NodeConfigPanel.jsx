import React from "react";
import { useForm } from "react-hook-form";

const NodeConfigPanel = ({ selectedNode }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: { label: selectedNode?.data.label || "" } });

  if (!selectedNode) return <p>Select a node to edit</p>;

  return (
    <div>
      <h2>Edit Node</h2>
      <form onSubmit={handleSubmit((data) => { selectedNode.data.label = data.label; alert("Node Updated!"); })}>
        <input type="text" {...register("label")} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NodeConfigPanel;
