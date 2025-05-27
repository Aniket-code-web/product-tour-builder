import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as Dialog from "@radix-ui/react-dialog";

/**
 * ProductTourEditor
 * ------------------
 * ▸ Form to add new steps (mock only → kept in local state)
 * ▸ Live preview of the step while typing
 * ▸ Scrollable vertical timeline of recorded steps
 * ▸ Each step card has:
 *   – hover tooltip (title)
 *   – click-to-open modal with full details
 */
export default function ProductTourEditor() {
  const [steps, setSteps] = useState([]);
  const [draft, setDraft] = useState({ title: "", image: "", description: "" });

  // Controlled inputs helpers
  const updateDraft = (field) => (e) => setDraft({ ...draft, [field]: e.target.value });

  const addStep = (e) => {
    e.preventDefault();
    if (draft.title.trim()) {
      setSteps((prev) => [...prev, draft]);
      setDraft({ title: "", image: "", description: "" });
    }
  };

  return (
    <div className="mx-auto max-w-6xl p-8 grid gap-10 lg:grid-cols-2">
      {/* ────────────────────────────── Editor (left) */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Add a tour step</h2>
        <form onSubmit={addStep} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={draft.title}
              onChange={updateDraft("title")}
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. Step 1: Welcome"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium " htmlFor="image">Image URL</label>
            <input
              id="image"
              type="url"
              value={draft.image}
              onChange={updateDraft("image")}
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://..."
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="description">Description</label>
            <textarea
              id="description"
              rows={4}
              value={draft.description}
              onChange={updateDraft("description")}
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Explain what happens in this step"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            Add step
          </button>
        </form>

        {/* Live preview */}
        <h3 className="mt-10 mb-4 text-xl font-semibold">Live preview</h3>
        <StepCard step={draft} isPreview />
      </section>

      {/* ────────────────────────────── Timeline (right) */}
      <section className="">
        <h2 className="text-2xl font-bold mb-10">Recorded steps</h2>
        {steps.length === 0 ? (
          <p className="text-gray-500">No steps added yet…</p>
        ) : (
          <div className="h-[32rem] overflow-y-auto pr-2 space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y:-30 }}
                animate={{ opacity: 1, y:0 }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                className="bg-gray-100 rounded-lg"
              >
                <StepCard step={step} index={idx + 1} />
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

/**
 * StepCard component – used for both preview and timeline.
 * Adds tooltip on hover and modal (Dialog) on click for full view.
 */
function StepCard({ step, index, isPreview = false }) {
  const content = (
    <div className="flex flex-col md:flex-row gap-6 items-center">
      {step.image && (
        <Tooltip.Provider delayDuration={150}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <img
                src={step.image}
                alt={step.title}
                className="w-48 h-32 object-cover rounded-xl shadow-lg cursor-pointer text-black"
              />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content side="top" align="center" asChild>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7 }}
                  className="bg-black text-white px-3 py-1 rounded text-sm shadow-md mb-6"
                >
                  {step.title || "(no title)"}
                </motion.div>
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      )}
      <div className="space-y-2 max-w-md">
        {!isPreview && index && (
          <span className="inline-block rounded-full bg-indigo-100 text-indigo-700 px-2 text-xs font-semibold">
            Step {index}
          </span>
        )}
        <h4 className="text-lg font-bold text-gray-800">
          {step.title || (isPreview ? "Title goes here" : "(no title)")}
        </h4>
        <p className="text-gray-600 whitespace-pre-line">
          {step.description || (isPreview ? "Description…" : "(no description)")}
        </p>
      </div>
    </div>
  );

  // ── If preview mode, no modal, just show the card
  if (isPreview) return (
    <div className="rounded-lg border border-dashed border-gray-300 p-4 bg-gray-50">
      {content}
    </div>
  );

  // ── Wrap with Dialog for modal view when not preview
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="rounded-lg border border-gray-200 p-4 hover:shadow-md transition cursor-pointer">
          {content}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="fixed left-1/2 top-1/2 w-[90vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl space-y-4"
          >
            {content}
            <Dialog.Close asChild>
              <button className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">Close</button>
            </Dialog.Close>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}