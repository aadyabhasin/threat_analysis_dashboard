import React, { useState } from 'react'
import {
  Shield,
  UploadCloud,
  History,
  FileText,
  Settings,
  User,
  ChevronDown,
  Info,
  ShieldCheck,
  Package,
  Link2,
  Play,
  Download,
  Copy,
  Check,
  AlertCircle,
  AlertTriangle,
  Bug,
  Database,
  CheckCircle2,
  X,
  FileCode
} from 'lucide-react'
import './App.css'

export default function App() {
  const [selectedAnalysis, setSelectedAnalysis] = useState('all')
  const [activeTab, setActiveTab] = useState('details')
  const [activeNav, setActiveNav] = useState('scan')
  const [hasFile, setHasFile] = useState(true)
  const [copied, setCopied] = useState(false)
  const [isScanning, setIsScanning] = useState(false)

  const handleCopyId = () => {
    navigator.clipboard?.writeText('WT20261014-153245-7F3A9B')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleStartScan = () => {
    setIsScanning(true)
    setTimeout(() => setIsScanning(false), 800)
  }

  const handleSavePdf = () => {
    window.print()
  }

  return (
    <div className="app-layout">
      {/* Top Header */}
      <header className="top-header">
        <div className="brand-section">
          <div className="brand-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L3 6V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6L12 2Z"
                fill="#2563EB"
              />
              <path
                d="M12 4.5L5 7.6V11.2C5 15.6 7.9 19.7 12 20.8C16.1 19.7 19 15.6 19 11.2V7.6L12 4.5Z"
                fill="#1D4ED8"
              />
              <path
                d="M8.5 11.5L10.8 14L15.5 9.3"
                stroke="#60A5FA"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="brand-title">Whizbee Threat Analysis</span>
        </div>

        <div className="user-profile-menu">
          <User size={16} color="#94a3b8" />
          <span className="user-name">snehil.jain</span>
          <ChevronDown size={14} color="#94a3b8" />
        </div>
      </header>

      {/* Main Container */}
      <div className="body-container">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <nav>
            <div
              className={`nav-link ${activeNav === 'scan' ? 'active' : ''}`}
              onClick={() => setActiveNav('scan')}
            >
              <UploadCloud size={17} />
              <span>Scan File</span>
            </div>
            <div
              className={`nav-link ${activeNav === 'history' ? 'active' : ''}`}
              onClick={() => setActiveNav('history')}
            >
              <History size={17} />
              <span>Scan History</span>
            </div>
            <div
              className={`nav-link ${activeNav === 'reports' ? 'active' : ''}`}
              onClick={() => setActiveNav('reports')}
            >
              <FileText size={17} />
              <span>Reports</span>
            </div>
            <div
              className={`nav-link ${activeNav === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveNav('settings')}
            >
              <Settings size={17} />
              <span>Settings</span>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          {/* Top Section: Upload Box & Analysis Type */}
          <div className="top-section-grid">
            {/* File Upload Box */}
            <div className="card-panel">
              <div
                className="upload-dropzone"
                onClick={() => setHasFile(true)}
              >
                <div className="cloud-icon-circle">
                  <UploadCloud size={22} strokeWidth={2.4} />
                </div>
                <div className="dropzone-title">Drag and drop a file here</div>
                <div className="dropzone-or">or</div>
                <button
                  type="button"
                  className="btn-choose-file"
                  onClick={(e) => {
                    e.stopPropagation()
                    setHasFile(true)
                  }}
                >
                  Choose File
                </button>
                <div className="supported-formats-note">
                  Supported formats: EXE, PDF, DOC, DOCX, XLS, XLSX, ZIP, RAR, etc.
                </div>
              </div>

              {hasFile && (
                <div className="uploaded-file-row">
                  <div className="uploaded-file-info">
                    <div className="file-icon-wrap">
                      <FileCode size={16} color="#3b82f6" />
                    </div>
                    <div>
                      <div className="file-name-text">invoice_sample.pdf</div>
                      <div className="file-size-text">2.4 MB</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-remove-uploaded"
                    title="Remove file"
                    onClick={() => setHasFile(false)}
                  >
                    <X size={15} />
                  </button>
                </div>
              )}
            </div>

            {/* Select Analysis Type */}
            <div className="card-panel">
              <div className="analysis-header-row">
                <span className="analysis-title">Select Analysis Type</span>
                <Info size={14} color="#3b82f6" style={{ cursor: 'pointer' }} />
              </div>

              <div className="analysis-cards-grid">
                {/* 1. All Analysis */}
                <div
                  className={`analysis-card ${selectedAnalysis === 'all' ? 'selected' : ''}`}
                  onClick={() => setSelectedAnalysis('all')}
                >
                  <div className="card-top-indicator">
                    <div className={`custom-radio ${selectedAnalysis === 'all' ? 'checked' : ''}`} />
                    <ShieldCheck size={20} color="#2563eb" />
                  </div>
                  <div className="analysis-card-name">All Analysis</div>
                  <div className="analysis-card-desc">
                    Runs all available scans (AV + Sandbox + URL + Static/Behavioral Analysis)
                  </div>
                </div>

                {/* 2. Antivirus Analysis */}
                <div
                  className={`analysis-card ${selectedAnalysis === 'antivirus' ? 'selected' : ''}`}
                  onClick={() => setSelectedAnalysis('antivirus')}
                >
                  <div className="card-top-indicator">
                    <div className={`custom-radio ${selectedAnalysis === 'antivirus' ? 'checked' : ''}`} />
                    <Shield size={20} color="#16a34a" />
                  </div>
                  <div className="analysis-card-name">Antivirus Analysis</div>
                  <div className="analysis-card-desc">
                    Checks against known malware signatures
                  </div>
                </div>

                {/* 3. Sandbox Analysis */}
                <div
                  className={`analysis-card ${selectedAnalysis === 'sandbox' ? 'selected' : ''}`}
                  onClick={() => setSelectedAnalysis('sandbox')}
                >
                  <div className="card-top-indicator">
                    <div className={`custom-radio ${selectedAnalysis === 'sandbox' ? 'checked' : ''}`} />
                    <Package size={20} color="#9333ea" />
                  </div>
                  <div className="analysis-card-name">Sandbox Analysis</div>
                  <div className="analysis-card-desc">
                    Executes file in isolated environment to observe behavior
                  </div>
                </div>

                {/* 4. URL Analysis */}
                <div
                  className={`analysis-card ${selectedAnalysis === 'url' ? 'selected' : ''}`}
                  onClick={() => setSelectedAnalysis('url')}
                >
                  <div className="card-top-indicator">
                    <div className={`custom-radio ${selectedAnalysis === 'url' ? 'checked' : ''}`} />
                    <Link2 size={20} color="#0284c7" />
                  </div>
                  <div className="analysis-card-name">URL Analysis</div>
                  <div className="analysis-card-desc">
                    Analyzes URLs, domains, reputation and threat intelligence
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn-start-scan"
                onClick={handleStartScan}
              >
                <Play size={12} fill="#ffffff" color="#ffffff" />
                <span>{isScanning ? 'Scanning...' : 'Start Scan'}</span>
              </button>
            </div>
          </div>

          {/* Scan Results Section */}
          <div className="scan-results-header">
            <h2 className="scan-results-heading">Scan Results</h2>
            <button
              type="button"
              className="btn-save-pdf"
              onClick={handleSavePdf}
            >
              <Download size={14} />
              <span>Save Report as PDF</span>
            </button>
          </div>

          {/* Results Main Card */}
          <div className="results-card">
            {/* Top Verdict & Metadata */}
            <div className="verdict-header-grid">
              {/* Verdict Left */}
              <div className="verdict-left-block">
                <div className="malicious-circle-icon">
                  <AlertCircle size={24} strokeWidth={2.4} />
                </div>
                <div className="verdict-details-col">
                  <div className="verdict-title-text">Malicious</div>
                  <div className="verdict-subtitle-text">
                    This file is identified as malicious.
                  </div>
                  <div className="probability-row">
                    <span className="probability-bold">Malicious Probability:</span>{' '}
                    <span className="probability-percent">92.6%</span>
                  </div>
                  <div className="probability-progress-track">
                    <div className="probability-progress-bar" style={{ width: '92.6%' }} />
                  </div>
                </div>
              </div>

              {/* Metadata Right */}
              <div className="metadata-table">
                <div className="meta-label">Unique Analysis ID</div>
                <div className="meta-value">
                  <button
                    type="button"
                    className="copy-button"
                    title="Copy ID"
                    onClick={handleCopyId}
                  >
                    {copied ? <Check size={12} color="#16a34a" /> : <Copy size={12} />}
                  </button>
                  <span>WT20261014-153245-7F3A9B</span>
                </div>

                <div className="meta-label">File Name</div>
                <div className="meta-value">invoice_sample.pdf</div>

                <div className="meta-label">File Size</div>
                <div className="meta-value">2.4 MB</div>

                <div className="meta-label">Scan Type</div>
                <div className="meta-value">All Analysis</div>

                <div className="meta-label">Scan Date &amp; Time</div>
                <div className="meta-value">14 Oct 2026, 15:32:45</div>
              </div>
            </div>

            {/* Warning Alert Banner */}
            <div className="warning-banner">
              <AlertCircle size={15} color="#dc2626" className="alert-icon" flexShrink={0} />
              <span className="warning-banner-text">
                This file contains suspicious behavior, matches known malware signatures and tries to communicate with malicious domains.
              </span>
            </div>

            {/* Navigation Tabs */}
            <div className="tabs-navigation">
              <div
                className={`tab-item ${activeTab === 'details' ? 'active' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                Analysis Details
              </div>
              <div
                className={`tab-item ${activeTab === 'info' ? 'active' : ''}`}
                onClick={() => setActiveTab('info')}
              >
                File Information
              </div>
              <div
                className={`tab-item ${activeTab === 'indicators' ? 'active' : ''}`}
                onClick={() => setActiveTab('indicators')}
              >
                Threat Indicators
              </div>
              <div
                className={`tab-item ${activeTab === 'timeline' ? 'active' : ''}`}
                onClick={() => setActiveTab('timeline')}
              >
                Timeline
              </div>
              <div
                className={`tab-item ${activeTab === 'logs' ? 'active' : ''}`}
                onClick={() => setActiveTab('logs')}
              >
                Logs
              </div>
            </div>

            {/* Tab Panels */}
            {activeTab === 'details' && (
              <div className="detail-subcards-grid">
                {/* 1. Antivirus Analysis Card */}
                <div className="detail-subcard">
                  <div className="subcard-title-row">
                    <Bug size={16} color="#ef4444" />
                    <span className="subcard-heading">Antivirus Analysis</span>
                  </div>

                  <div className="status-badge">
                    <AlertTriangle size={11} color="#dc2626" />
                    <span>Malicious</span>
                  </div>

                  <div className="field-group">
                    <div className="field-label-row">
                      <span>▶</span>
                      <span>Signature Match</span>
                    </div>
                    <div className="field-value-text">Trojan.GenericKD.123456</div>
                  </div>

                  <div className="field-group">
                    <div className="field-label-row">
                      <span>▶</span>
                      <span>Detected Engine</span>
                    </div>
                    <div className="field-value-text">ClamAV</div>
                  </div>

                  <div className="field-group">
                    <div className="field-label-row">
                      <span>○</span>
                      <span>Details</span>
                    </div>
                    <div className="field-value-text">
                      Malicious file detected based on signature.
                    </div>
                  </div>
                </div>

                {/* 2. Sandbox Analysis Card */}
                <div className="detail-subcard">
                  <div className="subcard-title-row">
                    <Package size={16} color="#9333ea" />
                    <span className="subcard-heading">Sandbox Analysis</span>
                  </div>

                  <div className="status-badge">
                    <AlertTriangle size={11} color="#dc2626" />
                    <span>Malicious</span>
                  </div>

                  <div className="field-group">
                    <div className="field-label-row">
                      <span>▶</span>
                      <span>Behavior</span>
                    </div>
                    <ul className="field-bullet-list">
                      <li className="field-bullet-item">• Creates registry key for persistence</li>
                      <li className="field-bullet-item">
                        • Attempts to connect to C2 server (185.199.110.23:8080)
                      </li>
                      <li className="field-bullet-item">• Drops additional payload (payload.exe)</li>
                    </ul>
                  </div>

                  <div className="field-group">
                    <div className="field-label-row">
                      <span>▶</span>
                      <span>Verdict</span>
                    </div>
                    <div className="field-value-text">Malicious</div>
                  </div>
                </div>

                {/* 3. URL Analysis Card */}
                <div className="detail-subcard">
                  <div className="subcard-title-row">
                    <Link2 size={16} color="#0284c7" />
                    <span className="subcard-heading">URL Analysis</span>
                  </div>

                  <div className="status-badge">
                    <AlertTriangle size={11} color="#dc2626" />
                    <span>Malicious</span>
                  </div>

                  <div className="field-group">
                    <div className="field-label-row">
                      <span>▶</span>
                      <span>Domain Reputation</span>
                    </div>
                    <div className="field-value-text">Low (0/100)</div>
                  </div>

                  <div className="field-group">
                    <div className="field-label-row">
                      <span>▶</span>
                      <span>URL Category</span>
                    </div>
                    <div className="field-value-text">Malware / C2</div>
                  </div>

                  <div className="field-group">
                    <div className="field-label-row">
                      <span>○</span>
                      <span>Details</span>
                    </div>
                    <div className="field-value-text">
                      Domain is newly registered (3 days old) and linked to known malicious infrastructure.
                    </div>
                  </div>
                </div>

                {/* 4. Overall Threat Indicators */}
                <div className="detail-subcard">
                  <div className="subcard-title-row">
                    <AlertTriangle size={16} color="#ef4444" />
                    <span className="subcard-heading">Overall Threat Indicators</span>
                  </div>

                  <div className="status-badge">
                    <span>High Risk</span>
                  </div>

                  <div className="threat-indicator-item">
                    <div className="threat-exclamation-dot">!</div>
                    <span>Matched with known malware signature</span>
                  </div>

                  <div className="threat-indicator-item">
                    <div className="threat-exclamation-dot">!</div>
                    <span>C2 communication detected</span>
                  </div>

                  <div className="threat-indicator-item">
                    <div className="threat-exclamation-dot">!</div>
                    <span>Persistence mechanism found</span>
                  </div>

                  <div className="threat-indicator-item">
                    <div className="threat-exclamation-dot">!</div>
                    <span>Suspicious domain (newly registered)</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab !== 'details' && (
              <div style={{ padding: '28px', textAlign: 'center', color: '#64748b', fontSize: '13px' }}>
                Content for <strong>{activeTab.toUpperCase()}</strong> is categorized under this analysis report.
              </div>
            )}

            {/* Bottom Status / ID Bar */}
            <div className="results-bottom-bar">
              <div className="footer-info-left">
                <Database size={13} color="#64748b" />
                <span>Report saved to database with ID: WT20261014-153245-7F3A9B</span>
              </div>
              <div className="footer-info-right">
                <CheckCircle2 size={13} color="#16a34a" />
                <span>Results are stored for future reference.</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
