import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Slider } from "../../../components/ui/slider";
import { useDispatch, useSelector } from "react-redux";
import { changeElectricity } from "../../../store/features/calculator/calculatorSlice";
import { HoverCardOnInfo } from "../../HoverCardOnInfo";
import { FaInfoCircle } from "react-icons/fa";

function Electricity() {
  const dispatch = useDispatch();
  const electricityData = useSelector(
    (state: any) => state.calculator.electricity
  );
  const [value, setValue] = useState(877);

  // Handle slider value changes
  const handleChange = (newValue: number[]) => {
    dispatch(changeElectricity(newValue[0]));
    setValue(newValue[0]);
  };

  useEffect(() => {
    setValue(electricityData);
  }, [electricityData]);

  return (
    <div>
      <Card className="border-0 shadow-none">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-center items-center justify-center">
            Annual Carbon Emissions from Electricity
            <span className="text-green-600 font-bold">
              <HoverCardOnInfo
                cardTrigger={
                  <FaInfoCircle className="text-lg sm:text-xl text-green-600" />
                }
                cardContent={
                  <div className="text-sm text-gray-700 text-left">
                    <ul>
                      <li>
                        The average US household consumes about 877 kWh of
                        electricity per month.
                      </li>
                      <li>
                        This translates to approximately 10,524 kWh per year.
                      </li>
                      <li>
                        Reducing electricity consumption can significantly lower
                        carbon emissions.
                      </li>
                      <li>
                        Consider using energy-efficient appliances and lighting
                        to save electricity.
                      </li>
                    </ul>
                  </div>
                }
              />
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col justify-center items-center my-8 sm:my-10">
            <div className="w-full max-w-xs sm:max-w-md md:w-[600px] flex flex-col gap-6 px-4 sm:px-6 md:px-0">
              {/* Monthly Electricity Consumption Input */}
              <Label
                className="text-lg sm:text-xl font-semibold text-gray-700"
                htmlFor="electricity"
              >
                Monthly Electricity Consumption (kilowatt-hours)
              </Label>
              <Slider
                value={[value]}
                min={0}
                max={2000} // Maximum allows for above-average consumption
                step={1} // Step size for precise adjustments
                onValueChange={handleChange}
              />
              <div className="flex justify-between w-full text-sm text-gray-600">
                <span>0 kWh</span>
                <span>2000 kWh</span>
              </div>

              {/* Display Current Monthly and Annual Consumption */}
              <div className="text-center text-sm sm:text-lg font-medium text-gray-700">
                Current Monthly Consumption:{" "}
                <span className="text-green-600 font-bold">
                  {value.toLocaleString()} kWh
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Electricity;
