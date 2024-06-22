import React from "react";

const SizeGuide = () => {
    return (
        <>
            <div class="w-11/12 md:w-8/12 mx-auto mt-10 mb-10">
                <h1 class="text-3xl font-bold mb-4">Footwear Sizing</h1>
                <table class="table-auto w-full border border-slate-500">
                    <thead class="bg-slate-200 border-b border-slate-500">
                        <tr className="text-center">
                            <th class="px-4 py-2">US Size</th>
                            <th class="px-4 py-2">Euro Size</th>
                            <th class="px-4 py-2">UK Size</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-300">
                        <tr className="text-center">
                            <td class="px-4 py-2">5</td>
                            <td class="px-4 py-2">35</td>
                            <td class="px-4 py-2">3</td>
                        </tr>
                        <tr className="text-center">
                            <td class="px-4 py-2">6</td>
                            <td class="px-4 py-2">36</td>
                            <td class="px-4 py-2">4</td>
                        </tr>
                        <tr className="text-center">
                            <td class="px-4 py-2">7</td>
                            <td class="px-4 py-2">37</td>
                            <td class="px-4 py-2">5</td>
                        </tr>
                        <tr className="text-center">
                            <td class="px-4 py-2">8</td>
                            <td class="px-4 py-2">38</td>
                            <td class="px-4 py-2">6</td>
                        </tr>
                        <tr className="text-center">
                            <td class="px-4 py-2">9</td>
                            <td class="px-4 py-2">39</td>
                            <td class="px-4 py-2">7</td>
                        </tr>
                        <tr className="text-center">
                            <td class="px-4 py-2">10</td>
                            <td class="px-4 py-2">40</td>
                            <td class="px-4 py-2">8</td>
                        </tr>
                        <tr className="text-center">
                            <td class="px-4 py-2">11</td>
                            <td class="px-4 py-2">41</td>
                            <td class="px-4 py-2">9</td>
                        </tr>
                        <tr className="text-center">
                            <td class="px-4 py-2">12</td>
                            <td class="px-4 py-2">42</td>
                            <td class="px-4 py-2">10</td>
                        </tr>
                    </tbody>
                </table>

                <div className="mt-8">
                    <h1 class="text-3xl font-bold mb-1">How To Measure?</h1>
                    <p>
                        Follow these easy steps to get the right size. For the best fit,
                        measure your feet at the end of the day.
                    </p>
                    <p className="mt-2">
                        1. Length: Measure the distance from the big toe's tip to the heel's
                        outermost part.
                    </p>
                    <p className="mt-1">
                        2. For tight fit, go one size down & For a loose fit, go one size
                        up.
                    </p>
                </div>
            </div>
        </>
    );
};

export default SizeGuide;
