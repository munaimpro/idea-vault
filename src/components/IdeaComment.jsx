'use client'
import { Button, Form } from '@heroui/react';

const IdeaComment = ({ staticComments }) => {

    return (
        <div className="pt-8 border-t border-base-200 space-y-6">
            {/* Comment Box Header */}
            <h3 className="text-xl font-extrabold text-[#082a5e] tracking-tight flex items-center gap-2">
                Discussion Engine
                <span className="text-xs bg-base-200 px-2.5 py-0.5 rounded-full text-base-content/60 font-semibold">
                    {staticComments.length}
                </span>
            </h3>

            {/* Comment Form */}
            <Form className="flex gap-3 items-start">
                <div className="grow">
                    <textarea
                        name="commentText"
                        placeholder="Contribute technical feedback or funding interest..."
                        rows={2}
                        className="w-full bg-base-200/60 hover:bg-base-200 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl p-4 text-sm text-base-content transition-all resize-none shadow-inner"
                    />
                </div>
                <Button type="submit" className="bg-[#082a5e] hover:bg-[#051c40] text-white font-bold h-12 px-6 rounded-xl text-xs shadow-md transition-all">
                    Broadcast
                </Button>
            </Form>

            
            {/* Available Comments */}
            <div className="space-y-4 pt-2">
                {staticComments.map((comment) => (
                    <div key={comment._id} className="p-5 bg-base-200/30 border border-base-200 rounded-2xl space-y-2 transition-all hover:bg-base-200/50 relative group/item">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-sm font-bold text-[#082a5e] block">{comment.userName}</span>
                                <span className="text-[10px] text-base-content/40 font-medium">
                                    {new Date(comment.createdAt).toLocaleString()}
                                </span>
                            </div>

                            {/* Render Edit and Delete on matching UserId */}
                            {comment.userId === currentUserId && (
                                <div className="flex items-center gap-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                    <button className="text-xs text-info hover:underline font-semibold">
                                        Edit
                                    </button>
                                    <span className="text-base-content/20 text-xs">•</span>
                                    <button className="text-xs text-error hover:underline font-semibold">
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>

                        <p className="text-sm text-base-content/80 leading-relaxed">
                            {comment.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IdeaComment;