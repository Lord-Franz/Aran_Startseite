import SunIcon from "../atoms/SunIcon.tsx";
import MoonIcon from "../atoms/MoonIcon.tsx";

type SwitchProps = {
    isOn: boolean;
    handleSwitch: () => void;
};

const ModeSwitch = ({isOn, handleSwitch} : SwitchProps) => {
    return (
        <div className={"fixed right-10 top-5"}>
            <div>

            </div>
            <input
                className={`sr-only peer`}
                type="checkbox"
                checked={isOn}
                id="switch" />
            {isOn ? <SunIcon/> : <MoonIcon/>}

            <div
                onClick={handleSwitch}
                className={`w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600`}
            >
            </div>
        </div>
    );
}; export default ModeSwitch