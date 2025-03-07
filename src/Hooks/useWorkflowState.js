import { useCallback } from "react";
import { addEdge, useNodesState, useEdgesState } from "reactflow";
import useUndoRedo from "./useUndoRedo";

const useWorkflowState = () => {
  const initialNodes = [{ id: "1", position: { x: 250, y: 5 }, data: { label: "Start" } }];
  const initialEdges = [];

  const [nodes, setNodes, undoNodes, redoNodes] = useUndoRedo(initialNodes);
  const [edges, setEdges, undoEdges, redoEdges] = useUndoRedo(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);


  const updateNode = (nodeId, newLabel) => {
    console.log("Updating node:", nodeId, newLabel);
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, label: newLabel } } : node
      )
    );
  };

  return {
    nodes,
    edges,
    onConnect,
    addNode: () => setNodes([...nodes, { id: `${nodes.length + 1}`, data: { label: `Node ${nodes.length + 1}` }, position: { x: Math.random() * 400, y: Math.random() * 400 } }]),
    updateNode, 
    undo: undoNodes,
    redo: redoNodes,
  };
};

export default useWorkflowState;
