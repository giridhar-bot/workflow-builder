import React, { useCallback, useMemo } from "react";
import ReactFlow, { MiniMap, Controls, Background, addEdge, useNodesState, useEdgesState } from "reactflow";
import "reactflow/dist/style.css";

const nodeTypes = {};
const edgeTypes = {};

const WorkflowCanvas = ({ setSelectedNode }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([{ id: "1", position: { x: 250, y: 5 }, data: { label: "Start" } }]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

 
  const memoizedNodeTypes = useMemo(() => nodeTypes, []);
  const memoizedEdgeTypes = useMemo(() => edgeTypes, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        onNodesChange={onNodesChange} 
        onEdgesChange={onEdgesChange} 
        onConnect={(params) => setEdges((eds) => addEdge(params, eds))}
        nodeTypes={memoizedNodeTypes} // ✅ Memoized nodeTypes
        edgeTypes={memoizedEdgeTypes} // ✅ Memoized edgeTypes
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default WorkflowCanvas;
