"use client";
import { AlertDialog, Button } from "@heroui/react";

export function DeleteConfirmModal({ idea }) {
    return (
        <AlertDialog>
            {/* Floating Glassmorphic Delete Action Button */}
            <Button
                variant="danger"
                className="min-w-8 w-8 h-8 rounded-lg p-0 bg-red-500/20 hover:bg-red-500/40 text-red-200 hover:text-white backdrop-blur-md border border-red-500/20 shadow-xs transition-all duration-200"
                title="Delete Idea"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px] rounded-3xl border border-base-200">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header className="pt-6 px-6">
                            <AlertDialog.Icon status="danger" className="bg-red-50 text-red-600" />
                            <AlertDialog.Heading className="text-lg font-bold text-base-content mt-3">
                                Delete Idea Permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body className="px-6 py-2">
                            <p className="text-sm text-base-content/60 leading-relaxed">
                                This will permanently remove this idea record and clear all related telemetry data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer className="p-6 flex gap-2">
                            <Button slot="close" variant="tertiary" className="flex-1 rounded-xl h-11 text-xs font-bold border border-base-200">
                                Cancel
                            </Button>
                            <Button slot="close" variant="danger" className="flex-1 rounded-xl h-11 text-xs font-bold bg-red-600 hover:bg-red-700 text-white">
                                Delete Permanently
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}