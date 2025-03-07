import React, { useState } from "react";
import WorkflowCanvas from "./Components/WorkflowCanvas";
import NodeConfigPanel from "./Components/NodeConfigPanel";
import WorkflowTable from "./Components/WorkflowTable";
import useWorkflowState from "./Hooks/useWorkflowState";


const App = () => {
  const { nodes, edges, onConnect, addNode, updateNode, undo, redo } = useWorkflowState(); // ✅ Ensure updateNode exists
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="container">
      <div className="toolbar">
        <button className="btn-green" onClick={addNode}>➕ Add Node</button>
        <button className="btn-yellow" onClick={undo}>↩️ Undo</button>
        <button className="btn-blue" onClick={redo}>↪️ Redo</button>
      </div>

      <div className="flex">
        <div className="workflow">
          <WorkflowCanvas nodes={nodes} edges={edges} onConnect={onConnect} setSelectedNode={setSelectedNode} />
        </div>
        <div className="panel">
          <NodeConfigPanel selectedNode={selectedNode} />
        </div>
      </div>

      {/* ✅ Ensure updateNode is correctly passed */}
      <WorkflowTable nodes={nodes} updateNode={updateNode} />
    </div>
  );
};

export default App;
