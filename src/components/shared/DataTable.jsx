"use client";
import React from "react";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const DataTable = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead className="bg-light text-secondary">
            <tr className="small fw-bold text-uppercase">
              {columns.map((col, index) => (
                <th key={index} className={`${index === 0 ? 'ps-4' : ''} ${col.align === 'end' ? 'text-end pe-4' : ''} py-3`}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                {/* প্রথম কলামে সবসময় ইমেজ এবং মেইন টাইটেল থাকে */}
                <td className="ps-4">
                  <div className="d-flex align-items-center gap-3 py-2">
                    <div style={{ position: 'relative', width: '60px', height: '40px' }} className="flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.title} fill className="rounded-2 object-fit-cover border"
                      />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold text-navy">{item.title}</h6>
                      {item.subtitle && <small className="text-muted">{item.subtitle}</small>}
                    </div>
                  </div>
                </td>

                {/* ডাইনামিক কলাম (যেমন: Client বা Category) */}
                {columns.slice(1, -1).map((col, idx) => (
                  <td key={idx}>
                    {col.key === 'category' ? (
                      <span className="badge bg-soft-cyan text-cyan px-3 py-2 rounded-pill border-0">
                        {item[col.key]}
                      </span>
                    ) : (
                      <span className="small text-muted">{item[col.key]}</span>
                    )}
                  </td>
                ))}

                {/* অ্যাকশন বাটন */}
                <td className="text-end pe-4">
                  <div className="d-flex justify-content-end gap-2">
                    <button className="btn btn-sm btn-outline-dark rounded-pill px-3 shadow-none" onClick={() => onEdit(item)}>
                      <FiEdit2 className="me-1" /> Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger rounded-pill px-3 shadow-none" onClick={() => onDelete(item.id)}>
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;