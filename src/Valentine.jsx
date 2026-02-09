import { useState, useEffect } from 'react';

export default function Valentine() {
    const [showConfirm, setShowConfirm] = useState(false);
    const [yesScale, setYesScale] = useState(1.0);
    const [confettiKey, setConfettiKey] = useState(0);
    const [hasSaidYes, setHasSaidYes] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleNo = () => {
        setYesScale(prev => prev + 0.25);
        setShowConfirm(true);
    };

    const handleYes = () => {
        setHasSaidYes(true);
        setConfettiKey(k => k + 1);
        setShowModal(true);
        setIsClosing(false);
    };

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowModal(false);
            setIsClosing(false);
        }, 300); // must match CSS animation duration
    };

    useEffect(() => {
        if (showConfirm) {
            const timer = setTimeout(() => setShowConfirm(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [showConfirm]);

    // Keyboard shortcut: N = No
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'n' || e.key === 'N') {
                handleNo();
            }
            if (e.key === 'y' || e.key === 'Y') {
                handleYes();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="valentine-wrapper">
            <h1>Will you be my Valentine?</h1>

            {hasSaidYes && <Confetti key={confettiKey} />}

            <div className="buttons">
                <button
                    onClick={handleYes}
                    style={{ transform: `scale(${yesScale})` }}
                    className="yes-btn"
                >
                    Yes
                </button>

                <button onClick={handleNo} className="no-btn">
                    No
                </button>
            </div>

            {showConfirm && <div className="confirm-msg">Are you sure?</div>}

            {showModal && (
                <div className={`modal-overlay ${isClosing ? 'fade-out' : ''}`}>
                    <div className={`modal ${isClosing ? 'modal-close' : 'modal-open'}`}>
                        <h2>Yay! 🎉</h2>
                        <p>Happy Valentine's Day! 💖</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

/* Confetti */
function Confetti() {
    const hearts = Array.from({ length: 30 }, (_, i) => (
        <span
            key={i}
            className="heart"
            style={{
                left: `${Math.random() * 100}%`,
                top: `${-10 - Math.random() * 20}%`,
                animationDelay: `${Math.random() * 2}s`
            }}
        >
            💖
        </span>
    ));

    return <div className="confetti">{hearts}</div>;
}
