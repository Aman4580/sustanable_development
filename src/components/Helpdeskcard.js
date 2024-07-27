import React from 'react';

export default function Helpdeskcard({ data }) {
  return (
    <div className="card help-card">
      <div className="card-body">
        <h5 className="mt-2 mb-3 font-weight-bold">{data.title}</h5>
        <p className="mb-0 mt-2 font-italic">{data.description}</p>
        <p className="mb-0 mt-2 font-weight-bold">Contact:</p>
        <p className="mb-0 mt-1">Phone: {data.contact.phone}</p>
        <p className="mb-0">Email: <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a></p>
        <p className="mb-0 mt-2 font-weight-bold">Links:</p>
        <p className="mb-0"><a href={data.links} target="_blank" rel="noopener noreferrer">{data.links}</a></p>
        <p className="mb-0 mt-2 font-weight-bold">State:</p>
        <p className="mb-0">{data.state}</p>
      </div>
      <footer className="blockquote-footer pt-4 mt-4 border-top">
        AgroInOne—<cite title="Source Title">Help Desk</cite>
      </footer>
    </div>
  );
}
