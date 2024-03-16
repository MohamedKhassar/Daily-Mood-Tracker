export const ConfirmationMessage = ({ mood }) => {
    return (
        <div className="text-center">
            <p className="text-xl font-bold mb-2">Thank you for your input!</p>
            <p>You have selected: {mood}</p>
        </div>
    );
};