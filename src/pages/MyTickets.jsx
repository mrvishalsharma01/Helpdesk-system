import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const STATUS_COLORS = {
  'In Progress': { background: '#22c55e', color: 'white' },
  'On hold': { background: '#2563eb', color: 'white' },
  'Closed': { background: '#525252', color: 'white' },
};

const SUPPORT_TEAMS = ['Tech support', 'Operation Team'];
const STATUS_LIST = ['In Progress', 'On hold', 'Closed'];

function getRandomStatus(i) {
  return STATUS_LIST[i % STATUS_LIST.length];
}
function getRandomSupport(i) {
  return SUPPORT_TEAMS[i % SUPPORT_TEAMS.length];
}
function getRandomDate(i) {
  // Returns a random date string in dd/mm/yy
  const d = new Date(Date.now() - (i * 1000000000));
  return d.toLocaleDateString('en-GB').replace(/\//g, '/').slice(0, 8);
}

function StarRating({ value = 0 }) {
  return (
    <span>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ color: i <= value ? '#ffc107' : '#bbb', fontSize: '18px' }}>&#9733;</span>
      ))}
    </span>
  );
}

function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState('');
  const [entries, setEntries] = useState(10);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    let stored = JSON.parse(localStorage.getItem('tickets') || '[]');
    // Add mock fields if missing
    stored = stored.map((t, i) => ({
      ...t,
      status: t.status || getRandomStatus(i),
      support: t.support || getRandomSupport(i),
      date: t.date || getRandomDate(i),
      rate: t.rate || 0,
    }));
    setTickets(stored);
  }, []);

  // Filtered tickets
  const filtered = tickets.filter(
    t =>
      t.ticketNo?.toString().toLowerCase().includes(search.toLowerCase()) ||
      t.subject?.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filtered.length / entries) || 1;
  const paginated = filtered.slice((page - 1) * entries, page * entries);

  const handleEntriesChange = e => {
    setEntries(Number(e.target.value));
    setPage(1);
  };

  const handleLogout = () => {
    alert('Logged out successfully!');
    navigate('/login');
  };

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      background: '#f9f9f9',
      fontFamily: 'sans-serif',
    },
    sidebar: {
      width: '200px',
      backgroundColor: '#ddd',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 60,
    },
    link: {
      textDecoration: 'none',
      color: 'black',
      fontSize: '16px',
      padding: '8px 10px',
      borderRadius: '5px',
      backgroundColor: '#f3f3f3',
    },
    main: {
      flex: 1,
      marginLeft: '200px',
      display: 'flex',
      flexDirection: 'column',
    },
    fullHeaderBar: {
      width: '100vw',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#40e0d0',
      padding: '10px 20px',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
    },
    headerLeft: {
      fontWeight: 'bold',
      fontSize: '22px',
      color: 'white',
    },
    headerRight: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
    },
    icon: {
      fontSize: '18px',
      background: 'black',
      color: 'white',
      padding: '6px 10px',
      borderRadius: '6px',
      cursor: 'pointer',
    },
    content: {
      flex: 1,
      backgroundColor: '#fff',
      padding: '100px 40px 20px',
    },
    title: {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '30px',
    },
    footer: {
      padding: '10px',
      textAlign: 'center',
      backgroundColor: '#40e0d0',
    },
    tableWrapper: {
      overflowX: 'auto',
      background: '#ededed',
      borderRadius: 8,
      marginTop: 20,
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 17,
    },
    th: {
      padding: '12px 10px',
      background: '#ededed',
      color: '#222',
      fontWeight: 600,
    },
    td: {
      padding: '10px',
      background: '#fff',
      borderBottom: '1px solid #e5e7eb',
    },
    statusBadge: status => ({
      padding: '4px 16px',
      borderRadius: 16,
      fontWeight: 600,
      fontSize: 15,
      background: STATUS_COLORS[status]?.background || '#bbb',
      color: STATUS_COLORS[status]?.color || '#fff',
      display: 'inline-block',
    }),
    searchInput: {
      padding: '10px 16px',
      borderRadius: 6,
      border: '1px solid #bbb',
      fontSize: 18,
      width: 220,
      marginRight: 8,
      background: '#ededed',
      outline: 'none',
      boxShadow: '1px 1px 2px #eee',
    },
    pagination: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: 16,
      gap: 10,
    },
    showEntries: {
      fontSize: 16,
      marginLeft: 20,
    },
  };

  return (
    <>
      <div style={styles.fullHeaderBar}>
        <div style={styles.headerLeft}>Helpdesk</div>
        <div style={styles.headerRight}>
          <span style={styles.icon}>BM</span>
          <span style={styles.icon}>BI</span>
          <span style={styles.icon}>🔔</span>
          <span style={styles.icon}>👤</span>
          <span style={styles.icon} onClick={handleLogout}>↪️</span>
        </div>
      </div>
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <Link to="/userdashboard" style={styles.link}>📊 Dashboard</Link>
          <Link to="/new-ticket" style={styles.link}>📝 New Ticket</Link>
          <Link to="/my-ticket" style={styles.link}>📁 My Ticket</Link>
        </div>
        <div style={styles.main}>
          <div style={styles.content}>
            <div style={styles.title}>List of Tickets</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 18 }}>
              <input
                type="text"
                placeholder="Find ticket"
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
                style={styles.searchInput}
              />
              <span style={{ fontSize: 22, color: '#888', marginLeft: -32, cursor: 'pointer' }}></span>
              <div style={styles.showEntries}>
                Show:
                <select value={entries} onChange={handleEntriesChange} style={{ margin: '0 8px', padding: '4px 8px', fontSize: 16, borderRadius: 4 }}>
                  {[10, 25, 50].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
                Entries
              </div>
            </div>
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Ticket No.</th>
                    <th style={styles.th}>Subject</th>
                    <th style={styles.th}>Status</th>
                    <th style={styles.th}>Support by</th>
                    <th style={styles.th}>Date</th>
                    <th style={styles.th}>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.length === 0 ? (
                    <tr><td colSpan={6} style={{ textAlign: 'center', padding: 30, color: '#888' }}>No tickets found.</td></tr>
                  ) : (
                    paginated.map(ticket => (
                      <tr key={ticket.id}>
                        <td style={{ ...styles.td, color: '#2563eb', textDecoration: 'underline', cursor: 'pointer' }}>
                          <span>{ticket.ticketNo}</span>
                        </td>
                        <td style={styles.td}>{ticket.subject || '-'}</td>
                        <td style={styles.td}>
                          <span style={styles.statusBadge(ticket.status)}>{ticket.status}</span>
                        </td>
                        <td style={styles.td}>{ticket.support}</td>
                        <td style={styles.td}>{ticket.date}</td>
                        <td style={styles.td}><StarRating value={ticket.rate} /></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div style={styles.pagination}>
              <span style={{ color: '#888', fontSize: 18, cursor: page > 1 ? 'pointer' : 'not-allowed' }} onClick={() => page > 1 && setPage(page - 1)}>&laquo;</span>
              <span style={{ fontSize: 16 }}> {page} </span>
              <span style={{ color: '#888', fontSize: 18, cursor: page < totalPages ? 'pointer' : 'not-allowed' }} onClick={() => page < totalPages && setPage(page + 1)}>&raquo;</span>
            </div>
            <div style={{ marginTop: 10, color: '#444', fontSize: 15 }}>
              Showing {filtered.length === 0 ? 0 : (page - 1) * entries + 1} to {Math.min(page * entries, filtered.length)} of {filtered.length} entries
            </div>
          </div>
          <div style={styles.footer}>Footer Area</div>
        </div>
      </div>
    </>
  );
}

export default MyTickets;
