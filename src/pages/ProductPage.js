import React from "react";
import { useParams, Link } from "react-router-dom";

// Placeholder page for individual product details
function ProductPage() {
  const { id } = useParams();

  // Map of product IDs to names for display
  const productNames = {
    "ai-assistant-platform": "AI-Powered Assistant Platform",
    "fintech-payments-app": "Fintech Payments App",
    "car-mechanic-marketplace": "Car-to-Mechanic Marketplace",
    "recur-scan": "Recur Scan",
  };

  const name = productNames[id] || "Product";

  return (
    <div className="page">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      <div className="product-placeholder">
        <div className="product-placeholder-icon">🚧</div>
        <h1 className="product-placeholder-title">{name}</h1>
        <p className="product-placeholder-text">
          Details about this product will be updated here soon.
        </p>
        <Link to="/projects" className="btn-primary" style={{ marginTop: "24px" }}>
          Back to Projects
        </Link>
      </div>
    </div>
  );
}

export default ProductPage;