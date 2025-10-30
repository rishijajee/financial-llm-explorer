// Financial LLMs Explorer - Main JavaScript File

// Model detailed information
const modelDetails = {
    bloomberg: {
        name: "BloombergGPT",
        fullDescription: "BloombergGPT is a 50 billion parameter large language model purpose-built from scratch for finance. It was trained on a massive dataset of 363 billion tokens from Bloomberg's extensive proprietary financial data sources, combined with 345 billion tokens from general-purpose datasets.",
        technicalSpecs: {
            parameters: "50 billion",
            architecture: "Decoder-only transformer",
            trainingTokens: "708 billion total",
            contextWindow: "2048 tokens",
            trainingTime: "~53 days on 64 GPUs"
        },
        strengths: [
            "Superior performance on financial NLP tasks",
            "Deep understanding of financial terminology",
            "Excellent at analyzing regulatory documents",
            "Strong performance on sentiment analysis",
            "Access to real-time Bloomberg data"
        ],
        limitations: [
            "Proprietary and expensive to access",
            "Limited to Bloomberg Terminal users",
            "Cannot be fine-tuned by external users",
            "Not suitable for small organizations"
        ],
        useCases: [
            "Financial news sentiment analysis",
            "Earnings call transcription and analysis",
            "Regulatory document processing",
            "Market intelligence gathering",
            "Financial report generation"
        ],
        benchmarks: {
            "Financial Sentiment": "92.5%",
            "Named Entity Recognition": "89.3%",
            "Question Answering": "87.8%",
            "Text Classification": "91.2%"
        }
    },
    fingpt: {
        name: "FinGPT",
        fullDescription: "FinGPT is an open-source financial large language model that takes a data-centric approach. It provides accessible and transparent resources for researchers and practitioners to develop their own FinLLMs through lightweight adaptation of top open-source models.",
        technicalSpecs: {
            parameters: "7B - 13B (adaptable)",
            architecture: "LLaMA-based with LoRA/QLoRA",
            trainingMethod: "Parameter-efficient fine-tuning",
            contextWindow: "2048-4096 tokens",
            trainingCost: "<$300 per adaptation"
        },
        strengths: [
            "Open-source and cost-effective",
            "Easy to fine-tune for specific tasks",
            "Active community support",
            "Regular updates with new data",
            "Supports RLHF for personalization"
        ],
        limitations: [
            "Smaller model size than commercial options",
            "Requires some technical expertise to deploy",
            "Limited context window",
            "May need fine-tuning for specific use cases"
        ],
        useCases: [
            "Stock price prediction",
            "Portfolio optimization",
            "Financial sentiment analysis",
            "Risk assessment",
            "Automated trading signals"
        ],
        benchmarks: {
            "Stock Prediction Accuracy": "68.5%",
            "Sentiment Analysis": "85.7%",
            "Financial Q&A": "79.3%",
            "News Classification": "88.1%"
        }
    },
    finbert: {
        name: "FinBERT",
        fullDescription: "FinBERT is a BERT-based model fine-tuned on financial text for sentiment analysis and classification. It's specifically trained on financial news articles, earnings call transcripts, and analyst reports.",
        technicalSpecs: {
            parameters: "110 million",
            architecture: "BERT-base fine-tuned",
            trainingData: "Financial news, earnings calls, analyst reports",
            contextWindow: "512 tokens",
            trainingCost: "$50-100"
        },
        strengths: [
            "Excellent for sentiment analysis",
            "Fast inference time",
            "Low computational requirements",
            "Well-documented and easy to use",
            "Proven accuracy on financial text"
        ],
        limitations: [
            "Limited to classification tasks",
            "Cannot generate text",
            "Small context window",
            "Not suitable for complex reasoning"
        ],
        useCases: [
            "Financial news sentiment classification",
            "Earnings call tone analysis",
            "Market sentiment tracking",
            "Financial document classification",
            "Risk signal detection"
        ],
        benchmarks: {
            "Sentiment Accuracy": "97.4%",
            "Financial Phrase Bank": "94.3%",
            "FiQA Classification": "89.7%",
            "Headlines Classification": "91.2%"
        }
    },
    finma: {
        name: "FinMA/PIXIU",
        fullDescription: "FinMA is part of the PIXIU framework, representing the first comprehensive financial large language model and evaluation benchmark. It's designed to handle multiple financial NLP tasks with a unified approach.",
        technicalSpecs: {
            parameters: "7 billion",
            architecture: "LLaMA fine-tuned with FIT dataset",
            trainingData: "136K instruction samples",
            contextWindow: "2048 tokens",
            trainingMethod: "Instruction tuning"
        },
        strengths: [
            "Multi-task capability",
            "Comprehensive evaluation framework (FLARE)",
            "Open-source with full documentation",
            "Good performance across diverse tasks",
            "Instruction-following capability"
        ],
        limitations: [
            "Challenges with numerical reasoning",
            "Entity recognition needs improvement",
            "Summarization quality varies",
            "Requires significant compute for inference"
        ],
        useCases: [
            "Financial question answering",
            "Named entity recognition",
            "Stock movement prediction",
            "Sentiment analysis",
            "Financial text summarization"
        ],
        benchmarks: {
            "Sentiment Analysis": "86.3%",
            "Classification": "83.7%",
            "Question Answering": "75.8%",
            "NER": "71.4%"
        }
    },
    gpt: {
        name: "GPT-4/GPT-5",
        fullDescription: "OpenAI's GPT-4 and GPT-5 are general-purpose large language models with strong capabilities in financial analysis, reasoning, and complex problem-solving. While not specifically trained for finance, their massive scale and broad knowledge make them highly effective.",
        technicalSpecs: {
            parameters: "Unknown (estimated 1T+)",
            architecture: "Transformer-based",
            contextWindow: "GPT-4: 128K, GPT-5: 1M tokens",
            capabilities: "Multimodal (text, images, code)",
            apiAccess: "REST API, Python SDK"
        },
        strengths: [
            "Exceptional reasoning capabilities",
            "Large context window",
            "Multimodal support",
            "Regular updates and improvements",
            "Extensive API ecosystem",
            "Strong code generation"
        ],
        limitations: [
            "High cost for large-scale use",
            "Not specialized for finance",
            "May hallucinate financial data",
            "Requires careful prompt engineering"
        ],
        useCases: [
            "Complex financial analysis",
            "Investment report generation",
            "Financial modeling assistance",
            "Risk assessment reports",
            "Regulatory compliance analysis",
            "Code generation for quant strategies"
        ],
        benchmarks: {
            "Financial Reasoning": "91.2%",
            "Complex Q&A": "89.5%",
            "Code Generation": "88.7%",
            "Report Quality": "92.3%"
        }
    },
    claude: {
        name: "Claude Opus 4",
        fullDescription: "Claude Opus 4 by Anthropic is known for its strong analytical capabilities, long context window, and focus on safety. It excels at detailed financial analysis and compliance work requiring careful reasoning.",
        technicalSpecs: {
            parameters: "Unknown (estimated 500B+)",
            architecture: "Constitutional AI framework",
            contextWindow: "200K tokens",
            capabilities: "Long-form analysis, code execution",
            apiAccess: "REST API, Python SDK"
        },
        strengths: [
            "Extremely long context window",
            "Excellent for detailed analysis",
            "Strong safety and accuracy focus",
            "Great for compliance work",
            "Nuanced understanding of requirements",
            "Lower token usage for same tasks"
        ],
        limitations: [
            "Higher cost per token",
            "May be overly cautious",
            "Not specialized for finance",
            "Smaller ecosystem than GPT"
        ],
        useCases: [
            "Regulatory compliance analysis",
            "Long-form financial reports",
            "Due diligence documentation",
            "Risk assessment frameworks",
            "Financial audit support",
            "Complex contract analysis"
        ],
        benchmarks: {
            "Accuracy": "93.1%",
            "Long Context Tasks": "91.8%",
            "Compliance Analysis": "94.5%",
            "Reasoning Quality": "92.7%"
        }
    },
    openfinllm: {
        name: "Open-FinLLMs",
        fullDescription: "Open-FinLLMs is a suite of open-source financial LLMs based on Meta's LLaMA 3, trained on over 52 billion financial tokens. It represents the latest advancement in democratizing financial AI.",
        technicalSpecs: {
            parameters: "8B - 70B",
            architecture: "LLaMA 3 framework",
            trainingData: "52B+ financial tokens",
            contextWindow: "8192 tokens",
            releaseDate: "2025"
        },
        strengths: [
            "State-of-art open-source performance",
            "Multiple model sizes available",
            "Large training corpus",
            "Regular updates and improvements",
            "Strong community backing",
            "Commercial use allowed"
        ],
        limitations: [
            "Relatively new (less proven)",
            "Requires significant compute",
            "Documentation still evolving",
            "May need fine-tuning"
        ],
        useCases: [
            "Financial decision-making",
            "Investment portfolio analysis",
            "Market trend analysis",
            "Financial planning automation",
            "Quantitative strategy development"
        ],
        benchmarks: {
            "Financial Tasks": "84.6%",
            "Decision Making": "81.3%",
            "Analysis Quality": "86.7%",
            "Prediction Accuracy": "79.8%"
        }
    }
};

// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeTableFilter();
    initializeModalHandlers();
    initializeCodeCopyButtons();
});

function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');

            // Update active button
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update active section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                }
            });

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function initializeTableFilter() {
    const filterSelect = document.getElementById('model-filter');
    const tableRows = document.querySelectorAll('#llm-table tbody tr');

    if (!filterSelect) return;

    filterSelect.addEventListener('change', (e) => {
        const filterValue = e.target.value;

        tableRows.forEach(row => {
            if (filterValue === 'all') {
                row.style.display = '';
            } else {
                const modelType = row.getAttribute('data-model');
                row.style.display = modelType === filterValue ? '' : 'none';
            }
        });
    });
}

function initializeModalHandlers() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');
    const detailButtons = document.querySelectorAll('.details-btn');

    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modelKey = button.getAttribute('data-model');
            showModelDetails(modelKey, modal, modalBody);
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

function showModelDetails(modelKey, modal, modalBody) {
    const model = modelDetails[modelKey];

    if (!model) {
        console.error('Model not found:', modelKey);
        return;
    }

    const html = `
        <h2>${model.name} - Detailed Information</h2>

        <h3>Overview</h3>
        <p>${model.fullDescription}</p>

        <h3>Technical Specifications</h3>
        <ul>
            ${Object.entries(model.technicalSpecs).map(([key, value]) =>
                `<li><strong>${formatKey(key)}:</strong> ${value}</li>`
            ).join('')}
        </ul>

        <h3>Strengths</h3>
        <ul>
            ${model.strengths.map(strength => `<li>${strength}</li>`).join('')}
        </ul>

        <h3>Limitations</h3>
        <ul>
            ${model.limitations.map(limitation => `<li>${limitation}</li>`).join('')}
        </ul>

        <h3>Primary Use Cases</h3>
        <ul>
            ${model.useCases.map(useCase => `<li>${useCase}</li>`).join('')}
        </ul>

        <h3>Benchmark Performance</h3>
        <ul>
            ${Object.entries(model.benchmarks).map(([task, score]) =>
                `<li><strong>${task}:</strong> ${score}</li>`
            ).join('')}
        </ul>
    `;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
}

function formatKey(key) {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
}

function initializeCodeCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeId = button.getAttribute('data-code');
            const codeElement = document.getElementById(codeId);

            if (!codeElement) {
                console.error('Code element not found:', codeId);
                return;
            }

            const code = codeElement.textContent;

            // Copy to clipboard
            navigator.clipboard.writeText(code).then(() => {
                // Visual feedback
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                button.style.background = '#16a34a';

                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy code:', err);
                button.textContent = 'Failed!';
                button.style.background = '#dc2626';

                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.style.background = '';
                }, 2000);
            });
        });
    });
}

// Utility: Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Export functions for potential external use
window.FinLLMExplorer = {
    showModelDetails: (modelKey) => {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        showModelDetails(modelKey, modal, modalBody);
    },
    scrollToSection,
    modelDetails
};

// Performance monitoring (optional)
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const loadTime = window.performance.timing.domContentLoadedEventEnd -
                        window.performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Alt + 1-4 for navigation
    if (e.altKey && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const sections = ['overview', 'comparison', 'usecases', 'code'];
        const index = parseInt(e.key) - 1;
        const button = document.querySelector(`[data-section="${sections[index]}"]`);
        if (button) button.click();
    }
});

// Table search functionality (bonus feature)
function addTableSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search models...';
    searchInput.style.cssText = `
        padding: 10px;
        margin: 10px 0;
        width: 300px;
        border: 2px solid #e2e8f0;
        border-radius: 6px;
        font-size: 1rem;
    `;

    const filterSection = document.querySelector('.filter-section');
    if (filterSection) {
        filterSection.appendChild(searchInput);

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('#llm-table tbody tr');

            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', addTableSearch);

// Analytics helper (placeholder - replace with your analytics)
function trackEvent(category, action, label) {
    console.log('Event tracked:', { category, action, label });
    // Add your analytics tracking code here
    // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
}

// Track button clicks
document.addEventListener('click', (e) => {
    if (e.target.matches('.details-btn')) {
        trackEvent('Model Details', 'View', e.target.getAttribute('data-model'));
    }
    if (e.target.matches('.copy-btn')) {
        trackEvent('Code', 'Copy', e.target.getAttribute('data-code'));
    }
    if (e.target.matches('.nav-btn')) {
        trackEvent('Navigation', 'Click', e.target.getAttribute('data-section'));
    }
});