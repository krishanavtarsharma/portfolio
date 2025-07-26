import streamlit as st

st.set_page_config(page_title="Portfolio Viewer", layout="wide")

st.title("📂 My Original Portfolio (React + Tailwind)")

st.markdown("यह वही पोर्टफोलियो है जो आपने पहले React में बनाया था, अब Streamlit में embed किया गया है।")

# Replace the below URL with your actual deployed portfolio URL
st.components.v1.iframe("https://your-react-portfolio-link.netlify.app", height=800, scrolling=True)
